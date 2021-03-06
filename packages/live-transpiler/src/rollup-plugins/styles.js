import path from "path";
import { makeLegalIdentifier, createFilter } from "@rollup/pluginutils";
import cssnano from "cssnano";
import PQueue from "p-queue";
import fs from "fs-extra";
import postcss from "postcss";
import { SourceMapConsumer, SourceMapGenerator } from "source-map";
import resolveAsync$1, { sync } from "resolve";
import { createHash } from "crypto";
import { cosmiconfig } from "cosmiconfig";
import valueParser from "postcss-value-parser";
import { lookup } from "mime-types";
import modulesValues from "postcss-modules-values";
import localByDefault from "postcss-modules-local-by-default";
import extractImports from "postcss-modules-extract-imports";
import modulesScope from "postcss-modules-scope";
import { extractICSS, replaceSymbols, replaceValueSymbols } from "icss-utils";

const isAbsolutePath = (path) => /^(?:\/|(?:[A-Za-z]:)?[/\\|])/.test(path);
const isRelativePath = (path) => /^\.?\.[/\\]/.test(path);
function normalizePath(...paths) {
	const f = path.join(...paths).replace(/\\/g, "/");
	if (/^\.[/\\]/.test(paths[0])) return `./${f}`;
	return f;
}
const resolvePath = (...paths) => normalizePath(path.resolve(...paths));
const relativePath = (from, to) => normalizePath(path.relative(from, to));
const humanlizePath = (file) => relativePath(process.cwd(), file);

const hashRe = /\[hash(?::(\d+))?]/;
const firstExtRe = /(?<!^|[/\\])(\.[^\s.]+)/i;
const dataURIRe = /data:[^\n\r;]+?(?:;charset=[^\n\r;]+?)?;base64,([\d+/A-Za-z]+={0,2})/;

const mapBlockRe = /(?:\n|\r\n)?\/\*[#*@]+?\s*?sourceMappingURL\s*?=\s*?(\S+)\s*?\*+?\//gm;
const mapLineRe = /(?:\n|\r\n)?\/\/[#@]+?\s*?sourceMappingURL\s*?=\s*?(\S+)\s*?$/gm;
async function getMap(code, id) {
	var _ref, _mapBlockRe$exec, _dataURIRe$exec;

	const [, data] =
		(_ref =
			(_mapBlockRe$exec = mapBlockRe.exec(code)) !== null &&
			_mapBlockRe$exec !== void 0
				? _mapBlockRe$exec
				: mapLineRe.exec(code)) !== null && _ref !== void 0
			? _ref
			: [];
	if (!data) return;
	const [, uriMap] =
		(_dataURIRe$exec = dataURIRe.exec(data)) !== null &&
		_dataURIRe$exec !== void 0
			? _dataURIRe$exec
			: [];
	if (uriMap) return Buffer.from(uriMap, "base64").toString();
	if (!id) throw new Error("Extracted map detected, but no ID is provided");
	const mapFileName = path.resolve(path.dirname(id), data);
	const exists = await fs.pathExists(mapFileName);
	if (!exists) return;
	return fs.readFile(mapFileName, "utf8");
}
const stripMap = (code) => code.replace(mapBlockRe, "").replace(mapLineRe, "");

class MapModifier {
	constructor(map) {
		if (typeof map === "string")
			try {
				this.map = JSON.parse(map);
			} catch {
				/* noop */
			}
		else this.map = map;
	}

	modify(f) {
		if (!this.map) return this;
		f(this.map);
		return this;
	}

	modifySources(op) {
		if (!this.map) return this;
		if (this.map.sources)
			this.map.sources = this.map.sources.map((s) => op(s));
		return this;
	}

	resolve(dir) {
		return this.modifySources((source) => {
			if (source === "<no source>") return source;
			return resolvePath(dir, source);
		});
	}

	relative(dir = process.cwd()) {
		return this.modifySources((source) => {
			if (source === "<no source>") return source;
			if (isAbsolutePath(source)) return relativePath(dir, source);
			else return normalizePath(source);
		});
	}

	toObject() {
		return this.map;
	}

	toString() {
		if (!this.map) return this.map;
		return JSON.stringify(this.map);
	}

	async toConsumer() {
		if (!this.map) return this.map;
		return new SourceMapConsumer(this.map);
	}

	toCommentData() {
		const map = this.toString();
		if (!map) return "";
		const sourceMapData = Buffer.from(map).toString("base64");
		return `\n/*# sourceMappingURL=data:application/json;base64,${sourceMapData} */`;
	}

	toCommentFile(fileName) {
		if (!this.map) return "";
		return `\n/*# sourceMappingURL=${fileName} */`;
	}
}

const mm = (map) => new MapModifier(map);

var resolveAsync = async (id, options = {}) =>
	new Promise((resolve, reject) => {
		resolveAsync$1(id, options, (err, res) =>
			err ? reject(err) : resolve(res)
		);
	});

var hasher = (data) => createHash("sha256").update(data).digest("hex");

var safeId = (id, ...salt) => {
	const hash = hasher([id, "0iOXBLSx", ...salt].join(":")).slice(0, 8);
	return makeLegalIdentifier(`${id}_${hash}`);
};

/* eslint-disable @typescript-eslint/no-var-requires */
const loaded = {};
const options = {
	// basedir: process.cwd(),
	preserveSymlinks: false,
};
function loadModule(moduleId) {
	if (loaded[moduleId]) return loaded[moduleId];
	if (loaded[moduleId] === null) return;

	try {
		try {
			loaded[moduleId] = require(sync(moduleId, options));
		} catch {
			loaded[moduleId] = require(sync(`./${moduleId}`, options));
		}
	} catch {
		loaded[moduleId] = null;
		return;
	}

	return loaded[moduleId];
}

var arrayFmt = (arr) =>
	arr
		.map((id, i, arr) => {
			const fmt = `\`${id}\``;

			switch (i) {
				case arr.length - 1:
					return `or ${fmt}`;

				case arr.length - 2:
					return fmt;

				default:
					return `${fmt},`;
			}
		})
		.join(" ");

function inferOption(option, defaultValue) {
	if (typeof option === "boolean") return option && {};
	if (typeof option === "object") return option;
	return defaultValue;
}
const modes = ["inject", "extract", "emit"];
const modesFmt = arrayFmt(modes);
function inferModeOption(mode) {
	var _m$, _m$2;

	const m = Array.isArray(mode) ? mode : [mode];
	if (m[0] && !modes.includes(m[0]))
		throw new Error(
			`Incorrect mode provided, allowed modes are ${modesFmt}`
		);
	return {
		inject:
			(!m[0] || m[0] === "inject") &&
			((_m$ = m[1]) !== null && _m$ !== void 0 ? _m$ : true),
		extract:
			m[0] === "extract" &&
			((_m$2 = m[1]) !== null && _m$2 !== void 0 ? _m$2 : true),
		emit: m[0] === "emit",
	};
}
function inferSourceMapOption(sourceMap) {
	const sm = Array.isArray(sourceMap) ? sourceMap : [sourceMap];
	if (!sm[0]) return false;
	return {
		content: true,
		...sm[1],
		inline: sm[0] === "inline",
	};
}
function inferHandlerOption(option, alias) {
	const opt = inferOption(option, {});
	if (alias && typeof opt === "object" && !opt.alias) opt.alias = alias;
	return opt;
}
function ensureUseOption(opts) {
	var _opts$sass, _opts$less, _opts$stylus;

	const all = {
		sass: [
			"sass",
			(_opts$sass = opts.sass) !== null && _opts$sass !== void 0
				? _opts$sass
				: {},
		],
		less: [
			"less",
			(_opts$less = opts.less) !== null && _opts$less !== void 0
				? _opts$less
				: {},
		],
		stylus: [
			"stylus",
			(_opts$stylus = opts.stylus) !== null && _opts$stylus !== void 0
				? _opts$stylus
				: {},
		],
	};
	if (typeof opts.use === "undefined") return Object.values(all);
	else if (!Array.isArray(opts.use))
		throw new TypeError("`use` option must be an array!");
	return opts.use.map((loader) => {
		if (typeof loader !== "string")
			throw new TypeError("`use` option must be an array of strings!");
		return all[loader] || [loader, {}];
	});
}
function ensurePCSSOption(option, type) {
	if (typeof option !== "string") return option;
	const module = loadModule(option);
	if (!module)
		throw new Error(`Unable to load PostCSS ${type} \`${option}\``);
	return module;
}
function ensurePCSSPlugins(plugins) {
	if (typeof plugins === "undefined") return [];
	else if (typeof plugins !== "object")
		throw new TypeError("`plugins` option must be an array or an object!");
	const ps = [];

	for (const p of !Array.isArray(plugins)
		? Object.entries(plugins)
		: plugins) {
		if (!p) continue;

		if (!Array.isArray(p)) {
			ps.push(ensurePCSSOption(p, "plugin"));
			continue;
		}

		const [plug, opts] = p;
		if (!opts) ps.push(ensurePCSSOption(plug, "plugin"));
		else ps.push(ensurePCSSOption(plug, "plugin")(opts));
	}

	return ps;
}

async function loadConfig(id, config) {
	var _process$env$NODE_ENV, _config$ctx;

	if (!config)
		return {
			plugins: [],
			options: {},
		};
	const { ext, dir, base } = path.parse(id);
	const searchPath = config.path ? path.resolve(config.path) : dir;
	const found = await cosmiconfig("postcss").search(searchPath);
	if (!found || found.isEmpty)
		return {
			plugins: [],
			options: {},
		};
	const { plugins, parser, syntax, stringifier } =
		typeof found.config === "function"
			? found.config({
					cwd: process.cwd(),
					env:
						(_process$env$NODE_ENV = process.env["NODE_ENV"]) !==
							null && _process$env$NODE_ENV !== void 0
							? _process$env$NODE_ENV
							: "development",
					file: {
						extname: ext,
						dirname: dir,
						basename: base,
					},
					options:
						(_config$ctx = config.ctx) !== null &&
						_config$ctx !== void 0
							? _config$ctx
							: {},
			  })
			: found.config;
	const result = {
		plugins: ensurePCSSPlugins(plugins),
		options: {},
	};
	if (parser) result.options.parser = ensurePCSSOption(parser, "parser");
	if (syntax) result.options.syntax = ensurePCSSOption(syntax, "syntax");
	if (stringifier)
		result.options.stringifier = ensurePCSSOption(
			stringifier,
			"stringifier"
		);
	return result;
}

const resolve = async (url, basedir, extensions) => {
	const options = {
		basedir,
		extensions,
	};
	let from;

	try {
		from = await resolveAsync(url, options);
	} catch {
		from = await resolveAsync(`./${url}`, options);
	}

	return {
		from,
		source: await fs.readFile(from),
	};
};

const name = "styles-import";
const extensionsDefault = [".css", ".pcss", ".postcss", ".sss"];
const plugin = postcss.plugin(name, (options = {}) => async (css, res) => {
	var _css$source, _options$resolve, _options$alias, _options$extensions;

	if (
		!((_css$source = css.source) === null || _css$source === void 0
			? void 0
			: _css$source.input.file)
	)
		return;
	const resolve$1 =
		(_options$resolve = options.resolve) !== null &&
		_options$resolve !== void 0
			? _options$resolve
			: resolve;
	const alias =
		(_options$alias = options.alias) !== null && _options$alias !== void 0
			? _options$alias
			: {};
	const extensions =
		(_options$extensions = options.extensions) !== null &&
		_options$extensions !== void 0
			? _options$extensions
			: extensionsDefault;
	const opts = { ...res.opts };
	delete opts.map;
	const { file } = css.source.input;
	const importList = [];
	const basedir = path.dirname(file);
	css.walkAtRules(/^import$/i, (importRule) => {
		// Top level only
		if (importRule.parent.type !== "root") {
			importRule.warn(res, "`@import` should be top level");
			return;
		} // Child nodes should not exist

		if (importRule.nodes) {
			importRule.warn(res, "`@import` was not terminated correctly");
			return;
		}

		const [urlNode] = valueParser(importRule.params).nodes; // No URL detected

		if (
			!urlNode ||
			(urlNode.type !== "string" && urlNode.type !== "function")
		) {
			importRule.warn(res, `No URL in \`${importRule.toString()}\``);
			return;
		}

		let url = "";

		if (urlNode.type === "string") {
			url = urlNode.value;
		} else if (urlNode.type === "function") {
			var _urlNode$nodes$;

			// Invalid function
			if (!/^url$/i.test(urlNode.value)) {
				importRule.warn(
					res,
					`Invalid \`url\` function in \`${importRule.toString()}\``
				);
				return;
			}

			const isString =
				((_urlNode$nodes$ = urlNode.nodes[0]) === null ||
				_urlNode$nodes$ === void 0
					? void 0
					: _urlNode$nodes$.type) === "string";
			url = isString
				? urlNode.nodes[0].value
				: valueParser.stringify(urlNode.nodes);
		}

		url = url.replace(/^\s+|\s+$/g, ""); // Resolve aliases

		for (const [from, to] of Object.entries(alias)) {
			if (!url.startsWith(from)) continue;
			url = normalizePath(to) + url.slice(from.length);
		} // Empty url

		if (url.length === 0) {
			importRule.warn(res, `Empty URL in \`${importRule.toString()}\``);
			return;
		}

		importList.push({
			importRule,
			url,
		});
	});

	for await (const { importRule, url } of importList) {
		try {
			const { source, from } = await resolve$1(url, basedir, extensions);

			if (!(source instanceof Uint8Array) || typeof from !== "string") {
				importRule.warn(
					res,
					`Incorrectly resolved \`@import\` in \`${importRule.toString()}\``
				);
				continue;
			}

			if (normalizePath(from) === normalizePath(file)) {
				importRule.warn(
					res,
					`\`@import\` loop in \`${importRule.toString()}\``
				);
				continue;
			}

			const imported = await postcss(plugin(options)).process(source, {
				...opts,
				from,
			});
			res.messages.push(...imported.messages, {
				plugin: name,
				type: "dependency",
				file: from,
			});
			if (!imported.root) importRule.remove();
			else importRule.replaceWith(imported.root);
		} catch {
			importRule.warn(
				res,
				`Unresolved \`@import\` in \`${importRule.toString()}\``
			);
		}
	}
});

const resolve$1 = async (url, basedir) => {
	const options = {
		basedir,
	};
	let from;

	try {
		from = await resolveAsync(url, options);
	} catch {
		from = await resolveAsync(`./${url}`, options);
	}

	return {
		from,
		source: await fs.readFile(from),
	};
};

var generateName = (placeholder, file, source) => {
	const { dir, name, ext, base } = path.parse(file);
	const hash = hasher(`${base}:${Buffer.from(source).toString()}`);
	const match = hashRe.exec(placeholder);
	const hashLen = match && Number.parseInt(match[1]);
	return placeholder
		.replace("[dir]", path.basename(dir))
		.replace("[name]", name)
		.replace("[extname]", ext)
		.replace(".[ext]", ext)
		.replace("[ext]", ext.slice(1))
		.replace(hashRe, hashLen ? hash.slice(0, hashLen) : hash.slice(0, 8));
};

const urlFuncRe = /^url$/i;
const imageSetFuncRe = /^(?:-webkit-)?image-set$/i;
const isDeclWithUrl = (decl) =>
	/^(?:url|(?:-webkit-)?image-set)\(/i.test(decl.value);
const walkUrls = (parsed, callback) => {
	parsed.walk((node) => {
		if (node.type !== "function") return;

		if (urlFuncRe.test(node.value)) {
			const { nodes } = node;
			const [urlNode] = nodes;
			const url =
				(urlNode === null || urlNode === void 0
					? void 0
					: urlNode.type) === "string"
					? urlNode.value
					: valueParser.stringify(nodes);
			callback(url.replace(/^\s+|\s+$/g, ""), urlNode);
			return;
		}

		if (imageSetFuncRe.test(node.value)) {
			for (const nNode of node.nodes) {
				if (nNode.type === "string") {
					callback(nNode.value.replace(/^\s+|\s+$/g, ""), nNode);
					continue;
				}

				if (nNode.type === "function" && urlFuncRe.test(nNode.value)) {
					const { nodes } = nNode;
					const [urlNode] = nodes;
					const url =
						(urlNode === null || urlNode === void 0
							? void 0
							: urlNode.type) === "string"
							? urlNode.value
							: valueParser.stringify(nodes);
					callback(url.replace(/^\s+|\s+$/g, ""), urlNode);
					continue;
				}
			}
		}
	});
};

var inlineFile = (file, source) => {
	const mime = lookup(file) || "application/octet-stream";
	const data = Buffer.from(source).toString("base64");
	return `data:${mime};base64,${data}`;
};

const name$1 = "styles-url";
const placeholderHashDefault = "assets/[name]-[hash][extname]";
const placeholderNoHashDefault = "assets/[name][extname]";
const plugin$1 = postcss.plugin(name$1, (options = {}) => async (css, res) => {
	var _css$source,
		_options$inline,
		_options$publicPath,
		_options$assetDir,
		_options$resolve,
		_options$alias,
		_options$hash,
		_css$source$input$map;

	if (
		!((_css$source = css.source) === null || _css$source === void 0
			? void 0
			: _css$source.input.file)
	)
		return;
	const inline =
		(_options$inline = options.inline) !== null &&
		_options$inline !== void 0
			? _options$inline
			: false;
	const publicPath =
		(_options$publicPath = options.publicPath) !== null &&
		_options$publicPath !== void 0
			? _options$publicPath
			: "./";
	const assetDir =
		(_options$assetDir = options.assetDir) !== null &&
		_options$assetDir !== void 0
			? _options$assetDir
			: ".";
	const resolve =
		(_options$resolve = options.resolve) !== null &&
		_options$resolve !== void 0
			? _options$resolve
			: resolve$1;
	const alias =
		(_options$alias = options.alias) !== null && _options$alias !== void 0
			? _options$alias
			: {};
	const placeholder = (
		(_options$hash = options.hash) !== null && _options$hash !== void 0
			? _options$hash
			: true
	)
		? typeof options.hash === "string"
			? options.hash
			: placeholderHashDefault
		: placeholderNoHashDefault;
	const { file } = css.source.input;
	const map = await mm(
		(_css$source$input$map = css.source.input.map) === null ||
			_css$source$input$map === void 0
			? void 0
			: _css$source$input$map.text
	)
		.resolve(path.dirname(file))
		.toConsumer();
	const urlList = [];
	const imported = res.messages
		.filter((msg) => msg.type === "dependency")
		.map((msg) => msg.file);
	css.walkDecls((decl) => {
		if (!isDeclWithUrl(decl)) return;
		const parsed = valueParser(decl.value);
		walkUrls(parsed, (url, node) => {
			var _decl$source, _decl$source2;

			// Resolve aliases
			for (const [from, to] of Object.entries(alias)) {
				if (!url.startsWith(from)) continue;
				url = normalizePath(to) + url.slice(from.length);
			} // Empty URL

			if (!node || url.length === 0) {
				decl.warn(res, `Empty URL in \`${decl.toString()}\``);
				return;
			} // Skip Data URI

			if (dataURIRe.test(url)) return; // Skip Web URLs

			if (!isAbsolutePath(url)) {
				try {
					new URL(url);
					return;
				} catch {
					// Is not a Web URL, continuing
				}
			}

			const basedirs = new Set(); // Use PostCSS imports

			if (
				((_decl$source = decl.source) === null ||
				_decl$source === void 0
					? void 0
					: _decl$source.input.file) &&
				imported.includes(decl.source.input.file)
			)
				basedirs.add(path.dirname(decl.source.input.file)); // Use SourceMap

			if (
				(_decl$source2 = decl.source) === null ||
				_decl$source2 === void 0
					? void 0
					: _decl$source2.start
			) {
				const pos = decl.source.start;
				const realPos =
					map === null || map === void 0
						? void 0
						: map.originalPositionFor(pos);
				const basedir =
					(realPos === null || realPos === void 0
						? void 0
						: realPos.source) && path.dirname(realPos.source);
				if (basedir) basedirs.add(path.normalize(basedir));
			} // Use current file

			basedirs.add(path.dirname(file));
			urlList.push({
				node,
				url,
				decl,
				parsed,
				basedirs,
			});
		});
	});
	map === null || map === void 0 ? void 0 : map.destroy();
	const usedNames = new Map();

	for await (const { node, url, decl, parsed, basedirs } of urlList) {
		let resolved;

		for await (const basedir of basedirs) {
			try {
				if (!resolved) resolved = await resolve(url, basedir);
			} catch {
				/* noop */
			}
		}

		if (!resolved) {
			decl.warn(
				res,
				`Unresolved URL \`${url}\` in \`${decl.toString()}\``
			);
			continue;
		}

		const { source, from } = resolved;

		if (!(source instanceof Uint8Array) || typeof from !== "string") {
			decl.warn(
				res,
				`Incorrectly resolved URL \`${url}\` in \`${decl.toString()}\``
			);
			continue;
		}

		res.messages.push({
			plugin: name$1,
			type: "dependency",
			file: from,
		});

		if (inline) {
			node.type = "string";
			node.value = inlineFile(from, source);
		} else {
			const unsafeTo = normalizePath(
				generateName(placeholder, from, source)
			);
			let to = unsafeTo; // Avoid file overrides

			const hasExt = firstExtRe.test(unsafeTo);

			for (
				let i = 1;
				usedNames.has(to) && usedNames.get(to) !== from;
				i++
			) {
				to = hasExt
					? unsafeTo.replace(firstExtRe, `${i}$1`)
					: `${unsafeTo}${i}`;
			}

			usedNames.set(to, from);
			node.type = "string";
			node.value =
				publicPath +
				(/[/\\]$/.test(publicPath) ? "" : "/") +
				path.basename(to);
			to = normalizePath(assetDir, to);
			res.messages.push({
				plugin: name$1,
				type: "asset",
				to,
				source,
			});
		}

		decl.value = parsed.toString();
	}
});

var generateScopedNameDefault = (placeholder = "[name]_[local]__[hash:8]") => (
	local,
	file,
	css
) => {
	const { dir, name, base } = path.parse(file);
	const hash = hasher(`${base}:${css}`);
	const match = hashRe.exec(placeholder);
	const hashLen = match && Number.parseInt(match[1]);
	return makeLegalIdentifier(
		placeholder
			.replace("[dir]", path.basename(dir))
			.replace("[name]", name)
			.replace("[local]", local)
			.replace(hashRe, hashLen ? hash.slice(0, hashLen) : hash)
	);
};

var postcssModules = (options) => {
	const opts = {
		mode: "local",
		...options,
		generateScopedName:
			typeof options.generateScopedName === "function"
				? options.generateScopedName
				: generateScopedNameDefault(options.generateScopedName),
	};
	return [
		modulesValues(),
		localByDefault({
			mode: opts.mode,
		}),
		extractImports({
			failOnWrongOrder: opts.failOnWrongOrder,
		}),
		modulesScope({
			exportGlobals: opts.exportGlobals,
			generateScopedName: opts.generateScopedName,
		}),
	];
};

const load = async (url, file, extensions, processor, opts) => {
	let from;
	const options = {
		basedir: path.dirname(file),
		extensions,
	};

	try {
		from = await resolveAsync(url, options);
	} catch {
		from = await resolveAsync(`./${url}`, options);
	}

	const source = await fs.readFile(from);
	const { messages } = await processor.process(source, { ...opts, from });
	const exports = {};

	for (const msg of messages) {
		if (msg.type !== "icss") continue;
		Object.assign(exports, msg.export);
	}

	return exports;
};

async function resolve$2(icssImports, load, file, extensions, processor, opts) {
	const imports = {};

	for await (const [url, values] of Object.entries(icssImports)) {
		const exports = await load(url, file, extensions, processor, opts);

		for (const [k, v] of Object.entries(values)) {
			imports[k] = exports[v];
		}
	}

	return imports;
}

const name$2 = "styles-icss";
const extensionsDefault$1 = [".css", ".pcss", ".postcss", ".sss"];
const plugin$2 = postcss.plugin(name$2, (options = {}) => async (css, res) => {
	var _css$source, _options$load, _options$extensions;

	if (
		!((_css$source = css.source) === null || _css$source === void 0
			? void 0
			: _css$source.input.file)
	)
		return;
	if (!res.processor) return;
	const load$1 =
		(_options$load = options.load) !== null && _options$load !== void 0
			? _options$load
			: load;
	const extensions =
		(_options$extensions = options.extensions) !== null &&
		_options$extensions !== void 0
			? _options$extensions
			: extensionsDefault$1;
	const opts = { ...res.opts };
	delete opts.map;
	const { icssImports, icssExports } = extractICSS(css);
	const imports = await resolve$2(
		icssImports,
		load$1,
		css.source.input.file,
		extensions,
		res.processor,
		opts
	);
	replaceSymbols(css, imports);

	for (const [k, v] of Object.entries(icssExports)) {
		res.messages.push({
			plugin: name$2,
			type: "icss",
			export: {
				[k]: replaceValueSymbols(v, imports),
			},
		});
	}
});

const name$3 = "styles-noop";

function noop() {
	/* noop */
}

var postcssNoop = postcss.plugin(name$3, () => noop);

let injectorId;
const cssVarName = "css";
const reservedWords = [cssVarName];

function getClassNameDefault(name) {
	const id = makeLegalIdentifier(name);
	if (reservedWords.includes(id)) return `_${id}`;
	return id;
}

function ensureAutoModules(am, id) {
	if (typeof am === "function") return am(id);
	if (am instanceof RegExp) return am.test(id);
	return am && /\.module\.[A-Za-z]+$/.test(id);
}

const loader = {
	name: "postcss",
	alwaysProcess: true,

	async process({ code, map, extracted }) {
		var _options$to, _res$map;

		const options = { ...this.options };
		const config = await loadConfig(this.id, options.config);
		const plugins = [];
		const autoModules = ensureAutoModules(options.autoModules, this.id);
		const supportModules = Boolean(options.modules || autoModules);
		const modulesExports = {};
		const postcssOpts = {
			...config.options,
			...options.postcss,
			from: this.id,
			to:
				(_options$to = options.to) !== null && _options$to !== void 0
					? _options$to
					: this.id,
			map: {
				inline: false,
				annotation: false,
				sourcesContent: this.sourceMap ? this.sourceMap.content : true,
				prev: mm(map).relative(path.dirname(this.id)).toObject(),
			},
		};
		delete postcssOpts.plugins;
		if (options.import)
			plugins.push(
				plugin({
					extensions: options.extensions,
					...options.import,
				})
			);
		if (options.url)
			plugins.push(
				plugin$1({
					inline: Boolean(options.inject),
					...options.url,
				})
			);
		if (options.postcss.plugins) plugins.push(...options.postcss.plugins);
		if (config.plugins) plugins.push(...config.plugins);

		if (supportModules) {
			const modulesOptions =
				typeof options.modules === "object" ? options.modules : {};
			plugins.push(
				...postcssModules({
					generateScopedName: undefined,
					failOnWrongOrder: true,
					...modulesOptions,
				}),
				plugin$2({
					extensions: options.extensions,
				})
			);
		}

		if (options.minimize)
			plugins.push(
				cssnano(
					typeof options.minimize === "object" ? options.minimize : {}
				)
			); // Avoid PostCSS warning

		if (plugins.length === 0) plugins.push(postcssNoop);
		const res = await postcss(plugins).process(code, postcssOpts);

		for (const msg of res.messages)
			switch (msg.type) {
				case "warning":
					this.warn({
						name: msg.plugin,
						message: msg.text,
					});
					break;

				case "icss":
					Object.assign(modulesExports, msg.export);
					break;

				case "dependency":
					this.deps.add(normalizePath(msg.file));
					break;

				case "asset":
					this.assets.set(msg.to, msg.source);
					break;
			}

		map = mm(
			(_res$map = res.map) === null || _res$map === void 0
				? void 0
				: _res$map.toJSON()
		)
			.resolve(path.dirname(postcssOpts.to))
			.toString();
		if (!options.extract && this.sourceMap)
			res.css += mm(map)
				.modify((map) => void delete map.file)
				.relative()
				.toCommentData();
		if (options.emit)
			return {
				code: res.css,
				map,
			};

		const saferId = (id) => safeId(id, path.basename(this.id));

		const modulesVarName = saferId("modules");
		const output = [
			`export const ${cssVarName} = ${JSON.stringify(res.css)};`,
		];
		const dts = [`export const ${cssVarName}: string;`];

		if (options.namedExports) {
			const getClassName =
				typeof options.namedExports === "function"
					? options.namedExports
					: getClassNameDefault;

			for (const name in modulesExports) {
				const newName = getClassName(name);
				if (name !== newName)
					this.warn(
						`Exported \`${name}\` as \`${newName}\` in ${humanlizePath(
							this.id
						)}`
					);
				const fmt = JSON.stringify(modulesExports[name]);
				output.push(`export const ${newName} = ${fmt};`);
				if (options.dts) dts.push(`export const ${newName}: ${fmt};`);
			}
		}

		if (options.extract)
			extracted = {
				id: this.id,
				css: res.css,
				map,
			};

		if (options.inject) {
			if (typeof options.inject === "function") {
				output.push(options.inject(cssVarName, this.id));
			} else {
				const { treeshakeable, ...injectorOptions } =
					typeof options.inject === "object" ? options.inject : {};
				const injectorName = saferId("injector");
				const injectorCall = `${injectorName}(${cssVarName},${JSON.stringify(
					injectorOptions
				)});`;

				if (!injectorId) {
					injectorId = await resolveAsync("./inject-css", {
						basedir: path.join(__dirname, "runtime"),
					})
						.then(normalizePath)
						.then(JSON.stringify);
				}

				output.push(`import ${injectorName} from ${injectorId};`);
				if (!treeshakeable)
					output.push(
						`var ${modulesVarName} = ${JSON.stringify(
							modulesExports
						)};`,
						injectorCall
					);

				if (treeshakeable) {
					output.push("let injected = false;");
					const injectorCallOnce = `if (!injected) { injected = true; ${injectorCall} }`;

					if (modulesExports.inject) {
						throw new Error(
							"`inject` keyword is reserved when using `inject.treeshakeable` option"
						);
					}

					let getters = "";

					for (const [k, v] of Object.entries(modulesExports)) {
						const name = JSON.stringify(k);
						const value = JSON.stringify(v);
						getters += `get ${name}() { ${injectorCallOnce} return ${value}; },\n`;
					}

					getters += `inject() { ${injectorCallOnce} },`;
					output.push(`var ${modulesVarName} = {${getters}};`);
				}
			}
		}

		if (!options.inject)
			output.push(
				`var ${modulesVarName} = ${JSON.stringify(modulesExports)};`
			);
		const defaultExport = `export default ${
			supportModules ? modulesVarName : cssVarName
		};`;
		output.push(defaultExport);

		if (options.dts && (await fs.pathExists(this.id))) {
			if (supportModules)
				dts.push(
					`interface ModulesExports ${JSON.stringify(
						modulesExports
					)}`,
					typeof options.inject === "object" &&
						options.inject.treeshakeable
						? `interface ModulesExports {inject:()=>void}`
						: "",
					`declare const ${modulesVarName}: ModulesExports;`
				);
			dts.push(defaultExport);
			await fs.writeFile(
				`${this.id}.d.ts`,
				dts.filter(Boolean).join("\n")
			);
		}

		return {
			code: output.filter(Boolean).join("\n"),
			map,
			extracted,
		};
	},
};

const loader$1 = {
	name: "sourcemap",
	alwaysProcess: true,

	async process({ code, map }) {
		var _await$getMap;

		map =
			(_await$getMap = await getMap(code, this.id)) !== null &&
			_await$getMap !== void 0
				? _await$getMap
				: map;
		return {
			code: stripMap(code),
			map,
		};
	},
};

const ids = ["node-sass", "sass"];
const idsFmt = arrayFmt(ids);
function loadSass(impl) {
	// Loading provided implementation
	if (impl) {
		const provided = loadModule(impl);
		if (provided) return [provided, impl];
		throw new Error(`Could not load \`${impl}\` Sass implementation`);
	} // Loading one of the supported modules

	for (const id of ids) {
		const sass = loadModule(id);
		if (sass) return [sass, id];
	}

	throw new Error(
		`You need to install ${idsFmt} package in order to process Sass files`
	);
}

const isModule = (url) => /^~[\d@A-Za-z]/.test(url);
function getUrlOfPartial(url) {
	const { dir, base } = path.parse(url);
	return dir ? `${normalizePath(dir)}/_${base}` : `_${base}`;
}
function normalizeUrl(url) {
	if (isModule(url)) return normalizePath(url.slice(1));
	if (isAbsolutePath(url) || isRelativePath(url)) return normalizePath(url);
	return `./${normalizePath(url)}`;
}

const extensions = [".scss", ".sass", ".css"];
const importer = (url, importer, done) => {
	const finalize = (id) =>
		done({
			file: id.replace(/\.css$/i, ""),
		});

	const next = () => done(null);

	if (!isModule(url)) return next();
	const moduleUrl = normalizeUrl(url);
	const partialUrl = getUrlOfPartial(moduleUrl);
	const options = {
		basedir: path.dirname(importer),
		extensions,
	}; // Give precedence to importing a partial

	resolveAsync(partialUrl, options)
		.then(finalize)
		.catch(() => {
			resolveAsync(moduleUrl, options).then(finalize).catch(next);
		});
};

const finalize = (id) => ({
	file: id.replace(/\.css$/i, ""),
});

const importerSync = (url, importer) => {
	if (!isModule(url)) return null;
	const moduleUrl = normalizeUrl(url);
	const partialUrl = getUrlOfPartial(moduleUrl);
	const options = {
		basedir: path.dirname(importer),
		extensions,
	}; // Give precedence to importing a partial

	try {
		try {
			return finalize(sync(partialUrl, options));
		} catch {
			return finalize(sync(moduleUrl, options));
		}
	} catch {
		return null;
	}
};

const loader$2 = {
	name: "sass",
	test: /\.(sass|scss)$/i,

	async process({ code, map }) {
		var _options$fibers, _options$sync;

		const options = { ...this.options };
		const [sass, type] = loadSass(options.impl);
		const useFibers =
			(_options$fibers = options.fibers) !== null &&
			_options$fibers !== void 0
				? _options$fibers
				: type === "sass";
		const fiber = useFibers ? loadModule("fibers") : undefined;
		const sync =
			(_options$sync = options.sync) !== null && _options$sync !== void 0
				? _options$sync
				: type !== "node-sass" && !fiber;
		const importers = [sync ? importerSync : importer];
		if (options.data) code = options.data + code;
		if (options.importer)
			Array.isArray(options.importer)
				? importers.push(...options.importer)
				: importers.push(options.importer);

		const render = async (options) =>
			new Promise((resolve, reject) => {
				if (sync) resolve(sass.renderSync(options));
				else
					sass.render(options, (err, css) =>
						err ? reject(err) : resolve(css)
					);
			}); // Remove non-Sass options

		delete options.impl;
		delete options.fibers;
		delete options.sync; // node-sass won't produce source maps if the `data`
		// option is used and `sourceMap` option is not a string.
		//
		// In case it is a string, `sourceMap` option
		// should be a path where the source map is written.
		//
		// But since we're using the `data` option,
		// the source map will not actually be written, but
		// all paths in sourcemap's sources will be relative to that path.

		const res = await render({
			...options,
			file: this.id,
			data: code,
			indentedSyntax: /\.sass$/i.test(this.id),
			sourceMap: this.id,
			omitSourceMapUrl: true,
			sourceMapContents: true,
			importer: importers,
			fiber,
		});
		const deps = res.stats.includedFiles;

		for (const dep of deps) this.deps.add(normalizePath(dep));

		return {
			code: Buffer.from(res.css).toString(),
			map: res.map ? Buffer.from(res.map).toString() : map,
		};
	},
};

const loader$3 = {
	name: "stylus",
	test: /\.(styl|stylus)$/i,

	async process({ code, map }) {
		var _style$sourcemap, _mm$toString;

		const options = { ...this.options };
		const stylus = loadModule("stylus");
		if (!stylus)
			throw new Error(
				"You need to install `stylus` package in order to process Stylus files"
			);
		const basePath = normalizePath(path.dirname(this.id));
		const paths = [`${basePath}/node_modules`, basePath];
		if (options.paths) paths.push(...options.paths);
		const style = stylus(code, options)
			.set("filename", this.id)
			.set("paths", paths)
			.set("sourcemap", {
				comment: false,
				basePath,
			});

		const render = async () =>
			new Promise((resolve, reject) => {
				style.render((err, css) => (err ? reject(err) : resolve(css)));
			});

		code = await render();
		const deps = style.deps();

		for (const dep of deps) this.deps.add(normalizePath(dep)); // We have to manually modify the `sourcesContent` field
		// since stylus compiler doesn't support it yet

		if (
			((_style$sourcemap = style.sourcemap) === null ||
			_style$sourcemap === void 0
				? void 0
				: _style$sourcemap.sources) &&
			!style.sourcemap.sourcesContent
		) {
			style.sourcemap.sourcesContent = await Promise.all(
				style.sourcemap.sources.map(async (source) => {
					const file = normalizePath(basePath, source);
					const exists = await fs.pathExists(file);
					if (!exists) return null;
					return fs.readFile(file, "utf8");
				})
			);
		}

		map =
			(_mm$toString = mm(style.sourcemap).toString()) !== null &&
			_mm$toString !== void 0
				? _mm$toString
				: map;
		return {
			code,
			map,
		};
	},
};

const extensions$1 = [".less", ".css"];

const getStylesFileManager = (less) =>
	new (class extends less.AbstractFileManager {
		supports() {
			return true;
		}

		async loadFile(filename, basedir) {
			const url = normalizeUrl(filename);
			const partialUrl = getUrlOfPartial(url);
			const options = {
				basedir,
				extensions: extensions$1,
			}; // Give precedence to importing a partial

			let id;

			try {
				id = await resolveAsync(partialUrl, options);
			} catch {
				id = await resolveAsync(url, options);
			}

			return {
				filename: id,
				contents: await fs.readFile(id, "utf8"),
			};
		}
	})();

const importer$1 = {
	install(less, pluginManager) {
		pluginManager.addFileManager(getStylesFileManager(less));
	},
};

const loader$4 = {
	name: "less",
	test: /\.less$/i,

	async process({ code, map }) {
		var _res$map;

		const options = { ...this.options };
		const less = loadModule("less");
		if (!less)
			throw new Error(
				"You need to install `less` package in order to process Less files"
			);
		const plugins = [importer$1];
		if (options.plugins) plugins.push(...options.plugins);
		const res = await less.render(code, {
			...options,
			plugins,
			filename: this.id,
			sourceMap: {
				outputSourceFiles: true,
				sourceMapBasepath: path.dirname(this.id),
			},
		});
		const deps = res.imports;

		for (const dep of deps) this.deps.add(normalizePath(dep));

		return {
			code: res.css,
			map:
				(_res$map = res.map) !== null && _res$map !== void 0
					? _res$map
					: map,
		};
	},
};

function matchFile(file, condition) {
	if (!condition) return false;
	if (typeof condition === "function") return condition(file);
	return condition.test(file);
} // This queue makes sure one thread is always available,
// which is necessary for some cases
// ex.: https://github.com/sass/node-sass/issues/857

const threadPoolSize = process.env.UV_THREADPOOL_SIZE
	? Number.parseInt(process.env.UV_THREADPOOL_SIZE)
	: 4; // default `libuv` threadpool size

const workQueue = new PQueue({
	concurrency: threadPoolSize - 1,
});
class Loaders {
	constructor(options) {
		this.loaders = new Map();
		this.use = new Map(options.use.reverse());

		this.test = (file) =>
			options.extensions.some((ext) => file.toLowerCase().endsWith(ext));

		this.addLoader(loader);
		this.addLoader(loader$1);
		this.addLoader(loader$2);
		this.addLoader(loader$4);
		this.addLoader(loader$3);
		if (options.loaders)
			for (const loader of options.loaders) this.addLoader(loader);
	}

	addLoader(loader) {
		if (!this.use.has(loader.name)) return;
		this.loaders.set(loader.name, loader);
	}

	isSupported(file) {
		if (this.test(file)) return true;

		for (const [, loader] of this.loaders) {
			if (matchFile(file, loader.test)) return true;
		}

		return false;
	}

	async process(payload, context) {
		for await (const [name, options] of this.use) {
			const loader = this.loaders.get(name);
			if (!loader) continue;
			const ctx = { ...context, options };

			if (loader.alwaysProcess || matchFile(ctx.id, loader.test)) {
				payload = await workQueue.add(
					loader.process.bind(ctx, payload)
				);
			}
		}

		return payload;
	}
}

async function concat(extracted) {
	const sm = new SourceMapGenerator({
		file: "",
	});
	const content = [];
	let offset = 0;

	for await (const { css, map } of extracted) {
		content.push(css);
		const consumer = await mm(map).toConsumer();
		if (!consumer) continue;
		consumer.eachMapping((m) =>
			sm.addMapping({
				generated: {
					line: offset + m.generatedLine,
					column: m.generatedColumn,
				},
				original: {
					line: m.originalLine,
					column: m.originalColumn,
				},
				source: m.source,
				name: m.name,
			})
		);

		if (consumer.sourcesContent) {
			for (let i = 0; i < consumer.sources.length; i++) {
				sm.setSourceContent(
					consumer.sources[i],
					consumer.sourcesContent[i]
				);
			}
		}

		consumer.destroy();
		offset += css.split("\n").length;
	}

	return {
		css: content.join("\n"),
		map: sm.toJSON(),
	};
}

/// <reference types="./shims/postcss-modules" />
var index = (options = {}) => {
	var _options$dts,
		_options$namedExports,
		_options$autoModules,
		_options$extensions;

	const isIncluded = createFilter(options.include, options.exclude);
	const sourceMap = inferSourceMapOption(options.sourceMap);
	const loaderOpts = {
		...inferModeOption(options.mode),
		minimize: inferOption(options.minimize, false),
		config: inferOption(options.config, {}),
		import: inferHandlerOption(options.import, options.alias),
		url: inferHandlerOption(options.url, options.alias),
		modules: inferOption(options.modules, false),
		to: options.to,
		dts:
			(_options$dts = options.dts) !== null && _options$dts !== void 0
				? _options$dts
				: false,
		namedExports:
			(_options$namedExports = options.namedExports) !== null &&
			_options$namedExports !== void 0
				? _options$namedExports
				: false,
		autoModules:
			(_options$autoModules = options.autoModules) !== null &&
			_options$autoModules !== void 0
				? _options$autoModules
				: false,
		extensions:
			(_options$extensions = options.extensions) !== null &&
			_options$extensions !== void 0
				? _options$extensions
				: [".css", ".pcss", ".postcss", ".sss"],
		postcss: {},
	};
	if (
		typeof loaderOpts.inject === "object" &&
		loaderOpts.inject.treeshakeable &&
		loaderOpts.namedExports
	)
		throw new Error(
			"`inject.treeshakeable` option is incompatible with `namedExports` option"
		);
	if (options.parser)
		loaderOpts.postcss.parser = ensurePCSSOption(options.parser, "parser");
	if (options.syntax)
		loaderOpts.postcss.syntax = ensurePCSSOption(options.syntax, "syntax");
	if (options.stringifier)
		loaderOpts.postcss.stringifier = ensurePCSSOption(
			options.stringifier,
			"stringifier"
		);
	if (options.plugins)
		loaderOpts.postcss.plugins = ensurePCSSPlugins(options.plugins);
	const loaders = new Loaders({
		use: [
			["postcss", loaderOpts],
			...ensureUseOption(options),
			["sourcemap", {}],
		],
		loaders: options.loaders,
		extensions: loaderOpts.extensions,
	});
	let extracted = [];
	let preserveModules;
	const plugin = {
		name: "styles",

		buildStart(opts) {
			preserveModules = Boolean(opts.preserveModules);
		},

		async transform(code, id) {
			var _ref;

			if (!isIncluded(id) || !loaders.isSupported(id)) return null; // Check if file was already processed into JS
			// by other instance(s) of this or other plugin(s)

			try {
				this.parse(code, {}); // If it doesn't throw...

				this.warn(`Skipping processed file ${humanlizePath(id)}`);
				return null;
			} catch {
				// Was not already processed, continuing
			}

			if (typeof options.onImport === "function")
				options.onImport(code, id);
			const ctx = {
				id,
				sourceMap,
				deps: new Set(),
				assets: new Map(),
				warn: this.warn.bind(this),
				plugin: this,
				options: {},
			};
			const res = await loaders.process(
				{
					code,
				},
				ctx
			);

			for (const dep of ctx.deps) this.addWatchFile(dep);

			for (const [fileName, source] of ctx.assets)
				this.emitFile({
					type: "asset",
					fileName,
					source,
				});

			if (res.extracted) {
				const { id } = res.extracted;
				extracted = extracted.filter((e) => e.id !== id);
				extracted.push(res.extracted);
			}

			return {
				code: res.code,
				map:
					(_ref = sourceMap ? res.map : undefined) !== null &&
					_ref !== void 0
						? _ref
						: {
								mappings: "",
						  },
				moduleSideEffects: res.extracted ? true : null,
			};
		},

		augmentChunkHash(chunk) {
			if (extracted.length === 0) return;
			const ids = [];

			for (const id of Object.keys(chunk.modules)) {
				const i = this.getModuleInfo(id);
				ids.push(i.id, ...i.importedIds);
			}

			const hashable = extracted
				.filter((e) => ids.includes(e.id))
				.sort((a, b) => ids.lastIndexOf(a.id) - ids.lastIndexOf(b.id))
				.map((e) => {
					const { base, dir } = path.parse(e.id);
					return {
						...e,
						id: base,
						map: mm(e.map).relative(dir).toString(),
					};
				});
			if (hashable.length === 0) return;
			return JSON.stringify(hashable);
		},

		async generateBundle(opts, bundle) {
			var _opts$dir;

			if (extracted.length === 0 || !(opts.dir || opts.file)) return; // Respect rollup's 2.18.0 option changes

			if (opts.preserveModules) preserveModules = opts.preserveModules; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- either `file` or `dir` are always present

			const dir =
				(_opts$dir = opts.dir) !== null && _opts$dir !== void 0
					? _opts$dir
					: path.dirname(opts.file);
			const chunks = Object.values(bundle).filter(
				(c) => c.type === "chunk"
			);
			const manual = chunks.filter((c) => !c.facadeModuleId);
			const emitted = preserveModules
				? chunks
				: chunks.filter((c) => c.isEntry || c.isDynamicEntry);
			const emittedList = [];

			const getExtractedData = async (name, ids) => {
				const fileName =
					typeof loaderOpts.extract === "string"
						? normalizePath(loaderOpts.extract).replace(
								/^\.[/\\]/,
								""
						  )
						: normalizePath(`${name}.css`);
				if (isAbsolutePath(fileName))
					this.error(
						[
							"Extraction path must be relative to the output directory,",
							`which is ${humanlizePath(dir)}`,
						].join("\n")
					);
				if (isRelativePath(fileName))
					this.error(
						[
							"Extraction path must be nested inside output directory,",
							`which is ${humanlizePath(dir)}`,
						].join("\n")
					);
				const entries = extracted
					.filter((e) => ids.includes(e.id))
					.sort(
						(a, b) => ids.lastIndexOf(a.id) - ids.lastIndexOf(b.id)
					);
				const res = await concat(entries);
				return {
					name: fileName,
					css: res.css,
					map: mm(res.map)
						.relative(path.dirname(path.resolve(dir, fileName)))
						.toString(),
				};
			};

			const getName = (chunk) => {
				if (opts.file) return path.parse(opts.file).name;

				if (preserveModules) {
					const { dir, name } = path.parse(chunk.fileName);
					return dir ? `${dir}/${name}` : name;
				}

				return chunk.name;
			};

			const getImports = (chunk) => {
				const ordered = [];
				let ids = [];

				for (const module of Object.keys(chunk.modules)) {
					const traversed = [];
					ids.push(module);

					while (ids.length > 0) {
						const imports = [];

						for (const id of ids) {
							if (traversed.includes(id) || !isIncluded(id))
								continue;
							if (loaders.isSupported(id)) ordered.push(id);
							else traversed.push(id);
							imports.push(...this.getModuleInfo(id).importedIds);
						}

						ids = imports;
					}
				}

				return ordered;
			};

			const moved = [];

			if (typeof loaderOpts.extract === "string") {
				const ids = [];

				for (const chunk of manual) {
					const chunkIds = getImports(chunk);
					moved.push(...chunkIds);
					ids.push(...chunkIds);
				}

				for (const chunk of emitted)
					ids.push(
						...getImports(chunk).filter((id) => !moved.includes(id))
					);

				const name = getName(chunks[0]);
				emittedList.push([name, ids]);
			} else {
				for (const chunk of manual) {
					const ids = getImports(chunk);
					if (ids.length === 0) continue;
					moved.push(...ids);
					const name = getName(chunk);
					emittedList.push([name, ids]);
				}

				for (const chunk of emitted) {
					const ids = getImports(chunk).filter(
						(id) => !moved.includes(id)
					);
					if (ids.length === 0) continue;
					const name = getName(chunk);
					emittedList.push([name, ids]);
				}
			}

			for await (const [name, ids] of emittedList) {
				const res = await getExtractedData(name, ids);

				if (typeof options.onExtract === "function") {
					const shouldExtract = options.onExtract(res);
					if (!shouldExtract) continue;
				} // Perform minimization on the extracted file

				if (loaderOpts.minimize) {
					var _resMin$map;

					const cssNanoOpts =
						typeof loaderOpts.minimize === "object"
							? loaderOpts.minimize
							: {};
					cssNanoOpts.from = res.name;
					cssNanoOpts.to = res.name;
					cssNanoOpts.map = sourceMap && {
						inline: false,
						annotation: false,
						sourcesContent: sourceMap.content,
						prev: res.map,
					};
					const resMin = await cssnano.process(res.css, cssNanoOpts);
					res.css = resMin.css;
					res.map =
						(_resMin$map = resMin.map) === null ||
						_resMin$map === void 0
							? void 0
							: _resMin$map.toString();
				}

				const cssFileId = this.emitFile({
					type: "asset",
					name: res.name,
					source: res.css,
				});

				if (res.map && sourceMap) {
					const fileName = this.getFileName(cssFileId);
					const assetDir = opts.assetFileNames
						? normalizePath(path.dirname(opts.assetFileNames))
						: "assets"; // Default for Rollup v2

					const map = mm(res.map)
						.modify((m) => {
							m.file = path.basename(fileName);
						})
						.modifySources((s) => {
							// Compensate for possible nesting depending on `assetFileNames` value
							if (s === "<no source>") return s;
							if (assetDir.length <= 1) return s;
							s = `../${s}`; // If it didnt return then there's definitely at least 1 level offset

							for (const c of assetDir)
								if (c === "/") s = `../${s}`;

							return s;
						});

					if (sourceMap.inline) {
						bundle[fileName].source += map.toCommentData();
					} else {
						const mapFileId = this.emitFile({
							type: "asset",
							fileName: `${fileName}.map`,
							source: map.toString(),
						});
						const mapFileName = path.basename(
							this.getFileName(mapFileId)
						);
						bundle[fileName].source += map.toCommentFile(
							mapFileName
						);
					}
				}
			}
		},
	};
	return plugin;
};

export default index;

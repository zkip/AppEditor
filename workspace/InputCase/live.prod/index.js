define({}.__MUSTBEREPLACED,function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e("react");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=r(a);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r,n=arguments[e];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var u,i=t[Symbol.iterator]();!(n=(u=i.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}t.default=function(t){u({},t);var e=i(a.useState(""),2),r=e[0],n=e[1];return o.default.createElement("div",null,o.default.createElement("input",{type:"text",onInput:function(t){n(t.target.value)}}),o.default.createElement("span",null,r))}},{name:"InputCase",version:"0.0.1",main:"index.js",license:"MIT"});
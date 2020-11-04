## List

+ loadModule( package_meta ) ModuleList

```
load<HTTPVerbs.Get> {
	request {
		header {
			...
		}

		body: package_meta <BSON>PackageMeta
	}

	response {
		header {
			Packages-Parts: uint[ (<BSON>PackageMeta).size, ...modules ]
		}

		body Content
	}
}

```
## List

+ loadModule( package_meta ) ModuleList

```
load<HTTPVerbs.Get> {
	request {
		header {
			...
			Package-Meta: <BSON>PackageMeta
		}

		body: name string
	}

	response {
		header {
			Packages-Part: <BSON>[]uint
			Package-Meta: <BSON>[]ModuleMeta
		}
	}
}

```
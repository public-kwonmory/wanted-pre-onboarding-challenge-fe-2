설명 적기

```
{
    "plugins": ["plugins/markdown"], // 마크다운 플러그인 사용하도록 하기
    "source": {
		"include": ["src/"],
		"includePattern": ".js$",
		"excludePattern": "(node_modules/|docs)_"
	},
	"sourceType": "module",
	"tags": {
		"allowUnknownTags": true,
		"dictionaries": ["jsdoc", "closure"]
	},
	"templates": {
		"cleverLinks": true,
		"monospaceLinks": false
	},
	"opts": {
		"encoding": "utf8",
		"destination": "./docs/",
		"recurse": true
	}

}
```
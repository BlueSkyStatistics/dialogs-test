const nav = [
	{
		"name": "Analysis",
		"tab": "analysis",    
		"buttons":[
			{
				"name": "Test",
				"icon": "icon-survival",
				"children": [
					"./example1",
					"./adv/example2"

				]
			}, 	
			{
				"name": "Tables",
				"icon": "icon-table_basic",
				"children": [
					"./misc/example3"
				]
			}                  
		]
	}
]
module.exports.nav = nav

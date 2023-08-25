const nav = [
	{
		"name": "Analysis",
		"tab": "analysis",    
		"buttons":[
			{
				"name": "Test",
				"icon": "icon-survival",
				"children": [
					"./Example1",
					"./adv/Example2"

				]
			}, 	
			{
				"name": "Tables",
				"icon": "icon-table_basic",
				"children": [
					"./misc/Example3"
				]
			}                  
		]
	}
]
module.exports.nav = nav

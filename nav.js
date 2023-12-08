
/*
  This file is protected by copyright (c) 2023-2024 by BlueSky Statistics, LLC.
  All rights reserved. The copy, modification, or distribution of this file is not
  allowed without the prior written permission from BlueSky Statistics, LLC.
*/

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


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

(function () {
	const semverLte = require('semver').lte
    let sessionStore = new Store({name:`constants`});
    if  (sessionStore.get("version") !== undefined && semverLte(`${sessionStore.get("version")}`, `10.3.3`)) {
        var modules = JSON.parse(fs.readFileSync(path.join(sessionStore.get("userData"), "modules.json"), 'utf8'))
        for (var i=0; i < modules.core.length; i++) {
            modules.core[i].update = "manual"
        }
        for (var i=0; i < modules.extentions.length; i++) {
            modules.extentions[i].update = "manual"
        }
        for (var i=0; i < modules.dialogs.length; i++) {
            modules.dialogs[i].update = "manual"
        }
        fs.writeFileSync(path.join(sessionStore.get("userData"), "modules.json"), JSON.stringify(modules, null, 4), 'utf8')
    }
})();
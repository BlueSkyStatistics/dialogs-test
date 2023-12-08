
/*
  This file is protected by copyright (c) 2023-2024 by BlueSky Statistics, LLC.
  All rights reserved. The copy, modification, or distribution of this file is not
  allowed without the prior written permission from BlueSky Statistics, LLC.
*/
	const Store = require('electron-store');
	const semverLte = require('semver').lte
    let sessionStore = new Store({name:`constants`});
	const store = new Store({name:`appconfig.v${sessionStore.get('version')}`});
	store.set("simsim","khulja")
	let vers = sessionStore.get("version")
	sessionStore.set("simsim","00")
    if  ( vers !== undefined && semverLte(`${vers}`, `10.3.3`)) {
		sessionStore.set("simsim","11")
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
		sessionStore.set("simsim","22")
        fs.writeFileSync(path.join(sessionStore.get("userData"), "modules2.json"), JSON.stringify(modules, null, 4), 'utf8')
    }


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


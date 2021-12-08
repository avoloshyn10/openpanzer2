/**
 * Scenario - handles scenario related tasks
 *
 * Copyright (c) 2021 Andrii Voloshyn.
 * Licensed under the GPL 2 license:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */
Scenario.loader = new ScenarioLoader() // set this.loader in Scenario?
Scenario.scenarioPath = "resources/scenarios/data/"

function Scenario (scenFile) {
  this.name = ''
  this.maxTurns = 0
  this.date = new Date()
  this.atmosferic = 0
  this.latitude = 0
  this.ground = 0
  this.turnsPerDay = 0 // how many turns to increase day
  this.dayTurn = 0 // the turn in current day
  this.map = new Map()
  this.file = scenFile
  let description = ''
  if (typeof scenFile !== 'undefined') {
    // Lookup information about scenario in scenariolist if exists
    for (let i = 0; i < scenariolist.length; i++) {
      if (scenariolist[i][0] === scenFile) {
        this.name = scenariolist[i][1]
        console.log(this.name)
        description = scenariolist[i][2]
        console.log(description)
        break
      }
    }
  }
  //Loads scenario data files
	this.load = function () {
    const loaded = Scenario.loader.loadScenario(this);
  }
}

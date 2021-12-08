/**
 * ScenarioLoader - Loads XML scenarios as exported from mapconvert.py script
 *
 * Copyright (c) 2021 Andrii Voloshyn.
 * Licensed under the GPL 2 license:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */
function ScenarioLoader () {
  let xmlData = null
  let scen = null
  this.loadScenario = function (scenarioObject) {
		let xmlHttp
    //
    scen = scenarioObject // ??
    xmlHttp = new XMLHttpRequest() // maybe replace by fetch?
    xmlHttp.open("GET", Scenario.scenarioPath + scen.file) // ,false) // Synchronous XMLHttpRequest on the main thread is deprecated
    xmlHttp.send(null)
  }
}
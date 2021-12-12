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
    scen = scenarioObject // ??
    xmlHttp = new XMLHttpRequest() // maybe replace by fetch?
    xmlHttp.open("GET", Scenario.scenarioPath + scen.file) // ,false) // Synchronous XMLHttpRequest on the main thread is deprecated
    xmlHttp.send(null)
    xmlHttp.onload = function() {
      if ((xmlData = xmlHttp.responseXML) == null) return false
      if (!parseMapHeader()) return false
      console.log('ok')
    }
  }

  function parseMapHeader () {
    const mapHeader = xmlData.getElementsByTagName("map")[0]
    if (mapHeader) {
      const rows = +mapHeader.getAttribute("rows")
      const cols = +mapHeader.getAttribute("cols")
      if (rows > 0 && rows < 99 && cols > 0 && cols < 99) { // ??
        scen.map.rows = rows
        scen.map.cols = cols
        scen.map.terrainImage = mapHeader.getAttribute("image")
        scen.map.victoryTurns = mapHeader.getAttribute("turns").split(", ")
        for (let i = 0; i < scen.map.victoryTurns.length; i++) {

        }
        console.log(scen)
      }
    }
    return true
  }
}
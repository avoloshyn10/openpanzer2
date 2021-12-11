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
    xmlHttp.overrideMimeType('text/xml');
    xmlHttp.send(null)
    xmlHttp.onload = function() {
      if (xmlHttp.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.log(`Ошибка ${xmlHttp.status}: ${xmlHttp.statusText}`); // Например, 404: Not Found
      } else { // если всё прошло гладко, выводим результат
        console.log(`Готово, получили ${xmlHttp.response.length} байт`); // response -- это ответ сервера
      }
    };
    //
    console.log(xmlHttp.responseXML)
    if ((xmlData = xmlHttp.responseXML) == null) return false
    console.log('ok')
    if (!parseMapHeader()) return false
  }

  function parseMapHeader () {

  }
}
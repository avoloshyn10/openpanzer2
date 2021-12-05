/**
 * GameState - Provides localStorage state and network state
 *
 * Copyright (c) 2021 Andrii Voloshyn.
 * Licensed under the GPL 2 license:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */
function GameState(Game) {
  const saveName = {
    scenario: 'openpanzer-scenario-'+VERSION,
    players: 'openpanzer-players-'+VERSION,
    settings: 'openpanzer-settings-'+VERSION,
    campaign: 'openpanzer-campaign-'+VERSION,
  }

  this.restore = function () {
    const player
    const s = restoreItem(saveName.scenario)
    const p = restoreItem(saveName.players)
	}
	
	function restoreItem(key)
	{
		var object = null;
		if (localStorage) object = localStorage.getItem(key);
		if (object) return JSON.parse(object);
		return null;
	}
 }
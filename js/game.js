/**
 * Game - main game object
 *
 * Copyright (c) 2021 Andrii Voloshyn.
 * Licensed under the GPL 2 license:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

/*function testev(param) { console.log(param); }*/

var game = new Game();

function Game()
{
  this.ui = null;
	this.state = null;
	this.campaign = null;
	this.scenario = null;
	this.gameStarted = false; //Game not yet fully initialised

  this.init = function()
	{
    this.state = new GameState(this);
    if (!this.state.restore()) //No savegame
		{

    }
  }
}

function gameStart()
{
  /*
  var rng = Math.round(Math.random() * (scenariolist.length - 1))
  var scenario = "resources/scenarios/xml/" +  scenariolist[rng][0];
  */
  game.init();
}
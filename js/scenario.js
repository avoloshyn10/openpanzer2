/**
 * Scenario - handles scenario related tasks
 *
 * Copyright (c) 2021 Andrii Voloshyn.
 * Licensed under the GPL 2 license:
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */


 function Scenario(scenFile)
 {
   this.name = "";
   this.maxTurns = 0;
	 this.date = new Date();
   this.atmosferic = 0;
	 this.latitude = 0;
	 this.ground = 0;
	 this.turnsPerDay = 0;  //how many turns to increase day
	 this.dayTurn = 0;      //the turn in current day
 }
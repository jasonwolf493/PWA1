/**
 * Created by jasonwolf on 1/16/14.
 */
//data consumption analyser
var driveSpace = prompt("How big is the company server in GBs?");
var driveUsage = prompt("How much space has been used?");
var driveAvail = driveSpace - driveUsage;
var wklyData = prompt("How many GBs of storage does your team use a week?");
var wklyDataClear = prompt("How many GBs of storage are cleared a week?");
var wklyDataUse = wklyData - wklyDataClear;
var wksTillNewServer = (driveAvail /  wklyDataUse);

alert("You will need a new server in "+wksTillNewServer+" if you continue at the same rate.");

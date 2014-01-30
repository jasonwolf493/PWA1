/**
 * Created by jasonwolf on 1/16/14.
 */
//blob factory
alert("There is an extreme shortage on blobs please fix this!\nBut remember blobs are very unstable, we don't want too many.");
var secretBlobAmounts = [1, 32, 43,12,13,54,34,21,32,12,76];
var boxNum = prompt("Go to the stock room and grab a box of ooze, they are labeled 0-10\nWhat one did you grab?");
var secretBlobAmounts=secretBlobAmounts[boxNum];
console.log(secretBlobAmounts);
alert("You open the box of ooze to find "+secretBlobAmounts+"OZs of ooze. You pour the ooze into the blob generator...");
var machineSetting = prompt("Select a number from 1-100 on the  machine's dial:");
var numOfBlobs = secretBlobAmounts * 5 / boxNum + machineSetting;
alert("You press the start button on the machine begin plopping little ooze balls on to the belt it slowly moves forward where it gets its little black pearly eyeballs injected into it.");
alert("The blobs get pumped up a clear tube into a big clear silo. But suddenly they begin to divide and multiply. The whole factory is swelling with blobs. It suddenly explodes sending the "+numOfBlobs+" That you created all over the city.");
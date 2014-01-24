/**
 * Created by jasonwolf on 1/16/14.
 */
//drive to work
var gas;
var bolts;
var tires;

alert("You awake to your alarm blaring, realizing you are late to work you get ready for work as quick as you can.\nBut as you enter your garage you realize you forgot to build your car last night.");
var bolts = prompt("It's time for you to build your car\nHow many bolts will you need for your car");
alert("Great, you grab "+bolts+" bolt from you bin of bolts of all different sizes.");
var tires = prompt("Now it's time to decide how many tires you will roll out for your car.");
alert("You roll "+tires+" tires up to your car.");
var gas = prompt("How many jugs of the blue gas did you grab?");
alert("You lug "+gas+" heavy jugs of gas to your car");
alert("Its finished. You step back to admire it and this is what you see...");
(bolts >= 50) ? alert("The car seems built well enough to drive.\nAt least nothing has fallen off yet...") : alert("The doors to the car all fall off at the same time.\nYou should have bolted it together better.");
(tires >= 4) ? alert("You car had enough tires to roll out of the garage.") : alert("The car couldn't even get out of the garage because of the tires.");
(gas >= 10) ? alert("As you turn the key to the ignition the car doesn't start.\n But then it starts with a roar") : alert("You turn the key... Nothing... you turn the key again... Nothing...");
if(bolts >= 50 && tires >= 4 && gas >= 10){
    alert("You drive your flawless car to work without any issues, and you clock into work just as the clock hit 9:00AM.\nYou are amazing.");

}else{

    alert("You weren't able to get to work, you better call your boss and tell him what happened (I hope he believes you.)");
}


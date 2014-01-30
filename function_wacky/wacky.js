/**
 * Created by jasonwolf on 1/16/14.
 */
//blob factory

    function blobSweeper(sweepRotation, speed){

        if(sweepRotation > 50){
            alert("The sweeper rotation speed is" + sweepRotation + " and this is too fast, slime is going everywhere!");
        }

        if(sweepRotation < 50){
            alert("The sweeper rotation speed of " + sweepRotation + " is too slow the slime are slipping away." );
        }

        if(sweepRotation == 50){
            alert("The sweeper rotation speed is set perfectly.");
        }

        if(speed < 50){
            alert("The speed of the sweeper is set at "+speed+" and you are blocking traffic.");
        }

        if(speed > 50){
            alert("The speed of the sweeper is set at "+speed+" and you are speeding and not getting any slime.");
        }

        if(speed == 50){
            alert("The speed of the sweeper is set at "+speed+". What a perfect speed, the blobs can't roll away fast enough.");
        }

    }
alert("The mayor of the city has forced you to clean up the mess you have made because of the blob factory.\nHe has been generous enough to provide you with a street sweeper.\nBut you'll have to learn to set the controls yourself.");

do{
    var b = prompt("The dial on the sweeper rotation is 0-100\nWhat do you turn it to?");
    var c = prompt("How fast will you be going?\n0-100SPH(slimes per hour)");
    var a = blobSweeper(b, c);
}while(true);


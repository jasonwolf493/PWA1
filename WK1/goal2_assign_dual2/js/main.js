/**
 * Created by Jason on 4/3/14.
 * assignment goal 1
 */
//self exec
(function(){

    console.log("fight");


    //player array
    var playerOne =["Spiderman",20,100];
    var playerTwo = ["Batman",20,100];
    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;


    var round = 0;


    function fight(){
        console.log("In the fight fnc");

        alert(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);

        for(var i= 0; i<10;i++){

            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;

            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+":"+playerOne[2]+" *START* "+playerTwo[0]+":"+playerTwo[2]);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOne[0]+":"+playerOne[2]+" *ROUND "+round+" OVER* "+playerTwo[0]+":"+playerTwo[2]);
            }else{
                alert(results);
                break;
            }
        }

    }


    function winnerCheck(){
        var result = "no winner";

        if(playerOne[2]<1 && playerTwo[2]<1){
            result = "You Both Die";
        }else if(playerOne[2]<1){
            result = playerTwo[0]+" Wins";
        }else if(playerTwo[2]<1){
            result = playerOne[0]+" Wins";
        }

        return result;


    }


    //execute fight function
    console.log("Fight fnc start");
    fight();
})();
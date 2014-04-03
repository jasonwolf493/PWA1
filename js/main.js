/**
 * Created by Jason on 4/3/14.
 * assignment goal 1
 */
//self exec
(function(){

    console.log("fight");

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

        alert(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

        for(var i= 0; i<10;i++){

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+":"+playerOneHealth+" *START* "+playerTwoName+":"+playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if(results === "no winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+" *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            }else{
                alert(results);
                break;
            }
        }

    }


    function winnerCheck(){
        var result = "no winner";

        if(playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die";
        }else if(playerOneHealth<1){
            result = playerTwoName+" Wins";
        }else if(playerTwoHealth<1){
            result = playerOneName+" Wins";
        }

        return result;


    }


    //execute fight function
    console.log("Fight fnc start");
    fight();
})();
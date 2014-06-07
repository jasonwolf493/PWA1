//Jason Wolf        Wk1     Duel1       6/6/14

//self executing function
(function(){
    //testing everything is working
    console.log("Fight!");

    //vars damage health and name
    var playerOneName = "Spiderman", playerTwoName = "Batman", player1Damage = 20, player2Damage = 20, playerOneHealth=100, playerTwoHealth=100, round = 0;

    //creates the fight function
    function fight(){
        console.log("in the fight function");

        //alert player info to the screen... health and names
        alert(playerOneName+":"+playerOneHealth+" *Start* "+playerTwoName+":"+playerTwoHealth);
        //start a loop for the fight... don't go over 10 rounds
        for(var i=0; i< 10; i++){

            //create minimum damage vars for each player
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;

            //create a random amount of damage
           var f1 = Math.floor(Math.random()*(player1Damage-minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random()*(player2Damage-minDamage2) + minDamage2);

            //inflict damage to player
            playerOneHealth -= f1;
            playerTwoHealth -= f2;

            // shows players health in the console log
            console.log(playerOneName+":"+playerOneHealth+"  "+playerTwoName+":"+playerTwoHealth);

            //run the winner check function
            var results = winnerCheck();
            console.log(results);

            //conditional check if the result is no winner
            if(results==="no winner"){
                //add to round number
                round++;
                // send info to user
                alert(playerOneName+":"+playerOneHealth+" Round "+round+" is over "+playerTwoName+":"+playerTwoHealth);
            }else{

                //send results to the user
                alert(results);

                //exit the fight loop
                break;
            }
        }



    }

    //creates the winner check function to check if there is a winner
    function winnerCheck(){
        //console log to see if we are in the winner check
        console.log("in the winner check function");

        //create a result var and set it to "no winner"
        var result = "no winner";

        //create a conditional, if both players die
        if(playerOneHealth<1&&playerTwoHealth<1){
            result = "You both die!";

        //another conditional if player one dies
        }else if(playerOneHealth<1){
            result = playerOneName+" Dies.. "+playerTwoName+" Wins!";

        //another conditional if player two dies
        }else if(playerTwoHealth<1){
            result = playerTwoName+" Dies.. "+playerOneName+" Wins!";
        }

        //send back the result of winner check
        return result

    }

    console.log("before fight function");
    //begins the fight
    fight();


})();
//Jason Wolf        Wk1     Duel1       6/6/14

//self executing function
(function(){
    //testing everything is working
    console.log("Fight!");

    //vars damage health and name
    var round = 0;
    var fighter1 = ["Spiderman",20,100];
    var fighter2 = ["Batman",20,100];

    //creates the fight function
    function fight(){
        console.log("in the fight function");

        //alert player info to the screen... health and names
        alert(fighter1[0]+":"+fighter1[2]+" *Start* "+fighter2[0]+":"+fighter2[2]);
        //start a loop for the fight... don't go over 10 rounds
        for(var i=0; i< 10; i++){

            //create minimum damage vars for each player
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;

            //create a random amount of damage
           var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2) + minDamage2);

            //inflict damage to player
            fighter1[2] -= f1;
            fighter2[2] -= f2;

            // shows players health in the console log
            console.log(fighter1[0]+":"+fighter1[2]+"  "+fighter2[0]+":"+fighter2[2]);

            //run the winner check function
            var results = winnerCheck();
            console.log(results);

            //conditional check if the result is no winner
            if(results==="no winner"){
                //add to round number
                round++;
                // send info to user
                alert(fighter1[0]+":"+fighter1[2]+" Round "+round+" is over "+fighter2[0]+":"+fighter2[2]);
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
        if(fighter1[2]<1&&fighter2[2]<1){
            result = "You both die!";

        //another conditional if player one dies
        }else if(fighter1[2]<1){
            result = fighter1[0]+" Dies.. "+fighter2[0]+" Wins!";

        //another conditional if player two dies
        }else if(fighter2[2]<1){
            result = fighter2[0]+" Dies.. "+fighter1[0]+" Wins!";
        }

        //send back the result of winner check
        return result

    }

    console.log("before fight function");
    //begins the fight
    fight();


})();
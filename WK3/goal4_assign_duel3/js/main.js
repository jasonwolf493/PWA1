//Jason Wolf        Wk1     Duel1       6/6/14

//self executing function
(function(){
    //testing everything is working
    console.log("Fight!");

    //set up the vars below
    //set the round number for the fight
    var round = 1;

    // create and object for all the fighters
    var fighters=[{name:"Spiderman",damage:20,health:100}, {name:"Batman",damage:20,health:100}];




    //grab the "p" tag of kabal using DOM
    var fighter1text = document.querySelector("#kabal").querySelector("p");

    //grab the "p" tag of kratos
    var fighter2text = document.querySelector("#kratos").querySelector("p");

    //grab the area for the round text using DOM
    var roundText = document.getElementById("round");

    //Finally get the fight button
    var button = document.getElementById("fight_btn");

    //sets the round text to Spiderman VS batman
    roundText.innerHTML=fighters[0].name+" VS "+fighters[1].name;


    //listens to the button object to see if its clicked on... then runs the fight function
    button.addEventListener("click", fight, false);


    //creates the fight function
    function fight(){
        //console log that the user is in the fight function
        console.log("in the fight function");



        //console log the round to make sure everything is working correctly
        console.log(round);

        //use innerHTML to set the round text to the actual round number
        roundText.innerHTML="Round "+round+" Over!";

        //alert player info to the screen... health and names
        //alert(fighters[0].name+":"+fighters[0].health+" *Start* "+fighters[1].name+":"+fighters[1].health);
        //start a loop for the fight... don't go over 10 rounds

            //create minimum damage vars for each player
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;

            //create a random amount of damage
           var f1 = Math.floor(Math.random()*(fighters[0].damage-minDamage1) + minDamage1);
           var f2 = Math.floor(Math.random()*(fighters[1].damage-minDamage2) + minDamage2);

            //inflict damage to player
            fighters[0].health -= f1;
            fighters[1].health -= f2;

            // shows players health in the console log
            console.log(fighters[0].name+":"+fighters[0].health+"  "+fighters[1].name+":"+fighters[1].health);

            //run the winner check function
            var results = winnerCheck();
            console.log(results);

            //conditional check if the result is no winner
            if(results==="no winner"){

                //add to round number
                round++;

                // send info to user


                //show fighter1's name and health using innerhtml and don't use the alert
                fighter1text.innerHTML=fighters[0].name+": "+fighters[0].health;

                //show fighter 2's name and health using innerhtml and don't use the alert
                fighter2text.innerHTML=fighters[1].name+": "+fighters[1].health;

            }else{

                //send results to the user
                //alert(results);

                //remove the event listener so the button can no longer be clicked
                button.removeEventListener("click",fight,false);

                //change the button text to DONE!
                document.querySelector(".buttonblue").innerHTML="DONE!!";
            }




    }

    //creates the winner check function to check if there is a winner
    function winnerCheck(){
        //console log to see if we are in the winner check
        console.log("in the winner check function");

        //create a result var and set it to "no winner"
        var result = "no winner";

        //create a conditional, if both players die
        if(fighters[0].health<1&&fighters[1].health<1){
            result = "You both die!";
            fighter1text.innerHTML="It's a tie";
            fighter2text.innerHTML="";


        //another conditional if player one dies
        }else if(fighters[0].health<1){
            result = fighters[0].name+" Dies.. "+fighters[1].name+" Wins!";
            fighter1text.innerHTML="";
            fighter2text.innerHTML=fighters[1].name+" you have WON the fight!";


        //another conditional if player two dies
        }else if(fighters[1].health<1){
            result = fighters[1].name+" Dies.. "+fighters[0].name+" Wins!";
            fighter1text.innerHTML=fighters[0].name+" you have WON the fight!";
            fighter2text.innerHTML="";

        }

        //send back the result of winner check
        return result

    }

    console.log("before fight function");

})();
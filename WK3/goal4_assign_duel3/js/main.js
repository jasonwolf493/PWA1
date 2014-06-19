//Jason Wolf        Wk1     Duel1       6/6/14

//self executing function
(function(){
    //testing everything is working
    console.log("Fight!");

    //vars damage health and name
    var round = 0;
    var fighters=[{name:"Spiderman",damage:20,health:100}, {name:"Batman",damage:20,health:100}];
    var fighter1 = ["Spiderman",20,100];
    var fighter2 = ["Batman",20,100];



    var fighter1text = document.querySelector("#kabal").querySelector("p");
    var fighter2text = document.querySelector("#kratos").querySelector("p");
    var roundText = document.getElementById("round");
    var button = document.getElementById("fight_btn");

    roundText.innerHTML="fdsafdsafdsfad";


    //creates the fight function
    button.onclick=function fight(){
        console.log("in the fight function");

        //alert player info to the screen... health and names
        alert(fighters[0].name+":"+fighters[0].health+" *Start* "+fighters[1].name+":"+fighters[1].health);
        //start a loop for the fight... don't go over 10 rounds
        for(var i=0; i< 10; i++){

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
                alert(fighters[0].name+":"+fighters[0].health+" Round "+round+" is over "+fighters[1].name+":"+fighters[1].health);
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
        if(fighters[0].health<1&&fighters[1].health<1){
            result = "You both die!";

        //another conditional if player one dies
        }else if(fighters[0].health<1){
            result = fighters[0].name+" Dies.. "+fighters[1].name+" Wins!";

        //another conditional if player two dies
        }else if(fighters[1].health<1){
            result = fighters[1].name+" Dies.. "+fighters[0].name+" Wins!";
        }

        //send back the result of winner check
        return result

    }

    console.log("before fight function");
    //begins the fight
    //fight();
    //document.getElementsByClassName("buttonblue")
    //button.onclick=fight();

})();
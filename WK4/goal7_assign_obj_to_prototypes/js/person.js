/**
 * Created by Jason Wolf
 * Class: PWA
 * Goal: Goal7
 */
(function(){

    //make person global so main can see it
    window.Person=Person;

    //adds all of the jobs and actions to the person
    Person.jobs = ["Teacher","Actor","Student","Pilot"];
    Person.actions = ["Eating","Working","Sleeping"];

    function Person(name,row){

        console.log("Person Created: ", name);

        this.name = name;

        //sets a random action for each person
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets each job randomly
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines the row
        this.row = row;

        //display first action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML=this.action;
    }


    //cycle through each action
    Person.prototype.update = function(){
        if(Math.floor(Math.random() <.01)){
            var i = Math.floor(Math.random()*Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById("r"+this.row+"c3");
            //use inner html to display the random action
            id.innerHTML=this.action;
        }
    }



})();
/**
 * Created by Jason Wolf
 * Class: PWA
 * Goal: Goal7
 */

(function(){
    //all vars
    var numOfPeople =3;
    var people = [];
    var names = ["Jason","Ange","Bob","John","Jane"];
    var interval;

    //make the loop for person
    for(var i = 0; i<numOfPeople;i++){

        //make a number between 1-5
        var personIndex = Math.floor(Math.random()*names.length);

        //New person
        var person = new Person(names[personIndex],i+1);

        populateHTML(person.name,"r"+(i+1)+"c1");
        populateHTML(person.job,"r"+(i+1)+"c2");

        people.push(person);
        names.splice(personIndex,1);
    }

    clearInterval(interval);

    //set interval
    interval=setInterval(runUpdate,1000 / 30);

    function populateHTML(data,field){
        var id=document.getElementById(field);
        id.innerHTML = data;
    }

    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
    }
})();
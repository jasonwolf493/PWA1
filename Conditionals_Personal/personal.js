/**
 * Created by jasonwolf on 1/16/14.
 */

// Freetime calculator
    // declaring all of the vars
var work = 8;
var school = 8;
var breakfast = 8;
var lunch = 8;
var dinner = 8;
var travel = 8;
var sleep = 8;
var other = 8;
var day = 24;


//nested if statements prompting the user for the amount of hours they spend on each activity
if(day >= 1){
   var work = prompt("How many hours a day do you work?\nYou have " + day + " hours available.");
    var day = day - work;

    if(day >= 1){
        var school = prompt("How many hours a day do you work on school?\nYou have " + day + " hours available.");
        var day = day - school;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var breakfast = prompt("How many hours a day do you work on breakfast? If you have breakfast at work enter 0.\nYou have " + day + " hours available.");
        var day = day - breakfast;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var lunch = prompt("How many hours a day do take for lunch? If you have lunch at work enter 0.\nYou have " + day + " hours available.");
        var day = day - lunch;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var dinner = prompt("How many hours a day do you take for dinner? If you have lunch at work enter 0.\nYou have " + day + " hours available.");
        var day = day - dinner;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var travel = prompt("How many hours a day do you spend travelling?\nYou have " + day + " hours available.");
        var day = day - travel;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var sleep = prompt("How many hours a day do you sleep?\nYou have " + day + " hours available.");
        var day = day - sleep;
    }else{alert("You have no more time left in the day.");}

    if(day >= 1){
        var other = prompt("How many hours a day do you spend on things that were not listed?\nYou have " + day + " hours available.");
        var day = day - other;
    }else{alert("You have no more time left in the day.");}


// If there are no more hours left in the day it will tell the user they have used all of their aval. hours
}else{
    alert("You have no more time left in the day.");

}


// Displays the final results for all of the inputs.
alert("You have finished entering your data. Please see the results below.\nYou spend " + work + " hours a day at work." + "\nYou spend " + school + " hours a day at school." + "\nYou spend " + breakfast + " hours a day on breakfast." + "\nYou spend " + lunch + " hours a day on lunch." + "\nYou spend " + dinner + " hours a day on dinner." + "\nYou spend " + travel + " hours a day traveling." + "\nYou spend " + sleep + " hours a day sleeping." + "\nYou spend " + other + " hours a day on unlisted activities." + "\nYou have a total of " + day + " unused hours a day.");

























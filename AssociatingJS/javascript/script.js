/**
 * Created by jasonwolf on 1/13/14.
 */
alert("Hello World!");



// Declaring a var.
var isStudent;

// Declaring the variable and defining it, before we call it.
var yearBorn = 1993;



// Trying console.log() with a String and a Var in the same line and a different line to see the different results.
console.log(yearBorn,"Hello World");

console.log("Hello World!");



isStudent = false;

// Jumping the gun a little. from CSS background. Probably not 100% correct. But there is no console errors.
if(isStudent == true)
    alert("You are a student.")
    else(alert("You are not a student."));



// Created an Array of a few different names and a number.
var listOfPeople = ["Jason", "Heather", "Brad", 32];


console.log(listOfPeople);          // Console will print everything in listOfPeople.
console.log(listOfPeople[1]);       // Console will print index #1 which is Heather at the moment.
listOfPeople[1] = "Angie";          // Console will change index #1 from Heather to Angie.
console.log(listOfPeople[1]);       // Console now prints index #1 again which has been changed from Heather to Angie.
console.log(listOfPeople[3]);       // Finally the console prints index #3 which is the number 32.

/**
 * Created by jasonwolf on 1/16/14.
 */


//it isnt calculating total expenses correctly its adding them as if they were strings


//Financial Calculator

//Collect account info
var checkingAccount = prompt("How much do you have in your checking account?"); //checking
var savingsAccount = prompt("How much do you have in your savings account?"); //savings

//Week 1 information



//week 1 income
var wk1Income = prompt("How much did you make in week 1?"); //income
var checkingAccount = wk1Income + checkingAccount;


// spending info
var wk1gasSpendings = prompt("How much did you spend on gas in week 1?"); //gas
var wk1foodSpendings = prompt("How much did you spend on food in week 1?"); //food
var wk1bills = prompt("How much did you spend on bills in week 1?"); //bills
var wk1other = prompt("How much did you spend on things that were not listed in week 1?"); //other



// transfers
var transferToSaving = prompt("How much did you move to your savings from checking?"); //to savings trans
var savingsAccount = transferToSaving + savingsAccount;
var checkingAccount = checkingAccount - transferToSaving;

var transferFromSaving = prompt("How much did you move to your checking from your savings?"); //from savings trans
var savingsAccount = savingsAccount - transferFromSaving;
var checkingAccount = checkingAccount + transferFromSaving;



//calc week1
var week1Spendings = wk1gasSpendings + wk1foodSpendings + wk1other + wk1bills; //total spending week 1

var wk1info = "Total week 1 expenses were $"+week1Spendings+"\n";





//Week 2 information



//week 2 income
var wk2Income = prompt("How much did you make in week 2?"); //income
var checkingAccount = wk2Income + checkingAccount;


// spending info
var wk2gasSpendings = prompt("How much did you spend on gas in week 2?"); //gas
var wk2foodSpendings = prompt("How much did you spend on food in week 2?"); //food
var wk2bills = prompt("How much did you spend on bills in week 2?"); //bills
var wk2other = prompt("How much did you spend on things that were not listed in week 2?"); //other



// transfers
var transferToSaving = prompt("How much did you move to your savings from checking?"); //to savings trans
var savingsAccount = transferToSaving + savingsAccount;
var checkingAccount = checkingAccount - transferToSaving;

var transferFromSaving = prompt("How much did you move to your checking from your savings?"); //from savings trans
var savingsAccount = savingsAccount - transferFromSaving;
var checkingAccount = checkingAccount + transferFromSaving;



//calc week2
var week2Spendings = wk2gasSpendings + wk2foodSpendings + wk2other + wk2bills; //total spending

var wk2info = "Total week 2 expenses were $"+week2Spendings+"\n";



//Week 3 information



//week 3 income
var wk3Income = prompt("How much did you make in week 3?"); //income
var checkingAccount = wk3Income + checkingAccount;


// spending info
var wk3gasSpendings = prompt("How much did you spend on gas in week 3?"); //gas
var wk3foodSpendings = prompt("How much did you spend on food in week 3?"); //food
var wk3bills = prompt("How much did you spend on bills in week 3?"); //bills
var wk3other = prompt("How much did you spend on things that were not listed in week 3?"); //other



// transfers
var transferToSaving = prompt("How much did you move to your savings from checking?"); //to savings trans
var savingsAccount = transferToSaving + savingsAccount;
var checkingAccount = checkingAccount - transferToSaving;

var transferFromSaving = prompt("How much did you move to your checking from your savings?"); //from savings trans
var savingsAccount = savingsAccount - transferFromSaving;
var checkingAccount = checkingAccount + transferFromSaving;



//calc week3
var week3Spendings = wk3gasSpendings + wk3foodSpendings + wk3other + wk3bills; //total spending

var wk3info = "Total week 3 expenses were $"+week3Spendings+"\n";



//Week 4 information



//week 4 income
var wk4Income = prompt("How much did you make in week 4?"); //income
var checkingAccount = wk4Income + checkingAccount;


// spending info
var wk4gasSpendings = prompt("How much did you spend on gas in week 4?"); //gas
var wk4foodSpendings = prompt("How much did you spend on food in week 4?"); //food
var wk4bills = prompt("How much did you spend on bills in week 4?"); //bills
var wk4other = prompt("How much did you spend on things that were not listed in week 4?"); //other



// transfers
var transferToSaving = prompt("How much did you move to your savings from checking?"); //to savings trans
var savingsAccount = transferToSaving + savingsAccount;
var checkingAccount = checkingAccount - transferToSaving;

var transferFromSaving = prompt("How much did you move to your checking from your savings?"); //from savings trans
var savingsAccount = savingsAccount - transferFromSaving;
var checkingAccount = checkingAccount + transferFromSaving;



//calc week4
var week4Spendings = wk4gasSpendings + wk4foodSpendings + wk4other + wk4bills; //total spending

var wk4info = "Total week 4 expenses were $"+week4Spendings+"\n";


//total everything

console.log(wk1info+wk2info+wk3info+wk4info);

























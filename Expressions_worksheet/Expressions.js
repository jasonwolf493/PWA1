/**
 * Created by jasonwolf on 1/16/14.
 */
//Dog Years

//given
var dogAge = 5;

//result
var dogYears = dogAge * 7;


//print
var print = "Sparky is " + dogAge + " human years old which is " + dogYears + " in dog years.";
console.log(print);




//Slice of pie part 1

//given
var slicesPerPizza = 10;
var people = 35;
var numPizzas = 15;


//result

var slicesPerPerson = slicesPerPizza * numPizzas / people;


// print

var print2 = "Each person ate " + slicesPerPerson + " slices of pizza at the party."
console.log(print2);



//dog food

var leftOver = slicesPerPizza * numPizzas % people;

//print

var print3 = "Sparky got " + leftOver + " slices of pizza."
console.log(print3);




//average shopping bill

//given
var total = [345, 236, 352, 235, 134];

//result
var spent = total[0] + total[1] + total[2] + total[3] + total[4];
var averageSpent = spent / 5;

//print
var print4 = "You have spent a total of $" + spent + " on groceries over 5 weeks. that is an average of $" + averageSpent + "0 per week.";
console.log(print4);


//discounts

//given
var price = 549;
var percent = .20;
var desc = "New stero system"
var tax = .08;

// result

//sale calc
var saleAmount = price * percent;
var saleTotal = price - saleAmount;

//tax calc
var taxAmount = saleTotal * tax;
var priceTax = taxAmount + saleTotal;

//print

var print5 = "Your " + desc + " was originally $" + price + " but after a discount of " + percent + " cents of each dollar, it is now $" + priceTax + " with tax.";
console.log(print5);
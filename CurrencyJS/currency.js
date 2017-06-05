
//test change amount. Feel free to change this number to test the program. Please enter as dollars.cents
totalChange = .16;
//an array of strings declaring the names of the currency, I used currency up to 20 dollar bills.
var currencyNames = ["twenties", "tens", "fives", "ones", "quarters", "dimes", "nickels", "pennies"];
//an array to hold the currency values
var currencyValues = [];

//function to calculate the amount given and translate that into currency values
function calculateChange(amount, currencyValues) {
  var change = amount * 100;  // Convert change to pennies
  var twenties = parseInt(change / 2000);
  change = parseInt(change % 2000);
  var tens = parseInt(change / 1000);
  change = parseInt(change % 1000);
  var fives = parseInt(change / 500);
  change = parseInt(change % 500);
  var ones = parseInt(change / 100);
  change = parseInt(change % 100);
  var quarters = parseInt(change / 25);
  change = parseInt(change % 25);
  var dimes = parseInt(change / 10);
  change = parseInt(change % 10);
  var nickels = parseInt(change / 5);
  change = parseInt(change % 5);
  var pennies = change;
  currencyValues[0] = twenties;
  currencyValues[1] = tens;
  currencyValues[2] = fives;
  currencyValues[3] = ones;
  currencyValues[4] = quarters;
  currencyValues[5] = dimes;
  currencyValues[6] = nickels;
  currencyValues[7] = pennies;
}

calculateChange(totalChange, currencyValues);
console.log("Total change = " + totalChange);
for (var i in currencyValues) {
  console.log(currencyNames[i] + " - quantity " + currencyValues[i]);
}
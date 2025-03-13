/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = Boolean(false);
//removed double quotes around false, as "false" is not recognized as a falsy value
if (isValid) {
  console.log("This is valid!");
}
else {
  console.log("This is not valid.");
}
//added additional else statement for clarity

let age = "25";
let totalAge = Number(age) + 5;
//using Number() to explicity convert age prevents totalAge from logging 255
console.log("Total Age: " + totalAge);

////////////////////////////////

let restaurantStatus = "It's noon";
if (restaurantStatus) {
  console.log("The restaurant is open, right now.");
}
else {
  console.log("The restaurant is closed, right now!");
}


let year = "2025";
let futureYear = Number(year) + 10 + Number(null);
console.log("I'll be 10 years older in " + futureYear + "."); 

//String conv.-----------
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//Numeric conv.---------------------
//Numeric conversion in mathematical functions and expressions happens automatically.

alert( "6" / "2" ); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string
let num = Number(str); // becomes a number 123
alert(typeof num); // number


// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

//boolean conv
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// Please note: the string with zero "0" is true
// Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)


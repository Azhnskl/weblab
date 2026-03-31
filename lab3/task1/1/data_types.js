// let a = 5, b = 4, c = 3;
// if (b*b + c*c == a*a){
//     console.log('True');
// }
// else{
//     console.log('False');
// }


// no error
let message = "hello";
message = 123456;


let n = 123;
n = 12.345;


alert( 1 / 0 ); // Infinity
alert(Infinity); // Infinity


//-----------------------BigInt-----------------------------

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

//-----------------------String-----------------------------

//In JavaScript, there are 3 types of quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

//Backticks are “extended functionality” quotes. 
// They allow us to embed variables and expressions into a string 
// by wrapping them in ${…}, for example:

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

//-----------------------------Boolean-------------------------------
// The boolean type has only two values: true and false.

// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

// For instance:

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// Boolean values also come as a result of comparisons:

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes")

//-----------------------typeof operator-----------------------------

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//task

let name2 = "Ilya";
alert( `hello ${1}` ); // ? -> 'Hello 1'
alert( `hello ${"name"}` ); // ? -> 'Hello name'
alert( `hello ${name2}` ); // ? -> 'Hello Ilya'
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


//------------------------------------------------------------------
//with no argument
let sayHi2 = () => alert("Hello");

// with a single argument
let double2 = n => n * 2;


//----------------------------------------------------------------------

// or we can write it like:
let sum2 = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum2(1, 2) ); // 3


//----------------------------------------------
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

//-----------------------------------------------
let sayHi = () => alert("Hello!");
sayHi();

//-----------------------------------------------
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();

//-----------------------------------------------

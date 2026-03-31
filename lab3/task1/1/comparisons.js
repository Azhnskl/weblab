alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

//string comparison-----------------------
//strings are compared letter-by-letter

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true


//Comparison of different types-------------------

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1


// For boolean values, true becomes 1 and false becomes 0.
// For example:

alert( true == 1 ); // true
alert( false == 0 ); // true

///operator === checks the type and the value of variables


alert( true === 1 ); // false
alert( false === 0 ); // false

alert( '01' === 1 ); // false
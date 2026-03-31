// Note that if any of the operands is a string, then the other one is converted to a string too.

// For example:

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


alert('1' + 2 + 2) //-> '122'

let a = '6';
let b = '2';


alert(a + b) //-> '62' (string)
alert(a / b) //-> 3 (number)
alert(a - b) //-> 4 (number)
alert(+a + +b) //-> 8 (number)
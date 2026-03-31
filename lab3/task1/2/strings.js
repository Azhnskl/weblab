for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

//replacing
let str = 'Hi';
str = 'h' + str[1]; // replace the string
alert( str ); // hi

//changing the case
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface

//if we need to change the case of special character:
alert( 'interface'[0].toUpperCase() ); //Interface
let q = prompt('enter a number: ', 0);
if(q%2==0){
    alert('even');
}else{
    alert('odd');
}

//or we can write it like:

let w = prompt('enter a number: ', 0);
let e = (w%2==0) ? 'even':'odd';


if (age < 3) {
  message = 'Hi, baby!';
} else if (age < 18) {
  message = 'Hello!';
} else if (age < 100) {
  message = 'Greetings!';
} else {
  message = 'What an unusual age!';
}


//or we can write it like:

let age = prompt('How old are u?', 18);

let r = (age<3) ? 'Hi, baby!':
    (age<19) ? 'Hello!':
    (age<100) ? 'Greetings':
    'What an unusual age!';

alert(r);








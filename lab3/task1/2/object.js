let user = {
    'name': 'Nurik',
    'surname': 'Shurik',
    'age': 19,
}

alert(user.name); //Nurik

//deleting
delete user.age;

//add new key and value
user['GPA'] = 2.70;


//-----------------------------

let user = {
  name: "John",
  age: 30
};

let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name")

//-----------------------------------

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

//or we can write it like:

let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

// take property name from the fruit variable
bag[fruit2] = 5;


//function------------------------------
function MakeUser(name45, age45){
    return {
        name: name45,
        age: age45,
    }
}

let a = prompt('add ur name: ');
let b = prompt('add ur age');

let user45 = MakeUser(a, b);

alert(user45.age);


//proto---------------------
let animal = {
  eats: true
};

let dog = {
  barks: true
};

dog.__proto__ = animal;

console.log(dog.eats);  // true


//'in' operator

//"key" in object

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
//----------------------------------------------------------
let user = { age: 30 };

let key2 = "age";
alert( key in user ); // true, property "age" exists

//The "for..in" loop
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

//task
let userr = {};
userr['namee'] = 'John';
userr['surnamee'] = 'Smith';
userr['namee'] = 'Pete'
delete userr.namee;

//or

userr.namee = 'Jhon';
userr.surnamee = 'Smith';
userr.namee = 'Pete';
delete userr.namee;

//task2

function isEmpty(schedule){
    for(let key in schedule) return false;
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

//task3 
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let summ = 0;
for(let key in salaries){
    summ+=salaries[key];
}
alert(summ);

//task4 
// before the call

function multiplyNumeric(menu){
    for(let key in menu){
        menu[key]*=2;
    }
    return menu;
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);




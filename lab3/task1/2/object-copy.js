let user = { name: "John" };
let admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference

//user and admin ссылаются на один и тот же объект, поэтому когда меняется имя у админа она меняется и у юзера

//but here:
let user2 = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user2[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user2.name ); // still John in the original object
//biz mynda objectterdi tenestirmeimiz, pryamo copy jasaimyz into clone object



//-----------------------------------------
let user3 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user3.sizes.height ); // 182


//method structuredClone(object) deep copy 

let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

alert( user4.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user4.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related






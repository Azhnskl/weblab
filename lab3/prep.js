// Условие

// Тебе дана JSON-строка с полями title и category.

// Поля могут отсутствовать или быть пустыми строками.

// Используя оператор ||, задай значения по умолчанию:

// если title пустой или отсутствует → "Untitled"

// если category пустая или отсутствует → "general" 


let input = '{"title": "News", "category": "sport"}';

let obj = JSON.parse(input);

let newName = obj.title || "Untitled";
let newCat = obj.category || "general";

//---------------------------------------------------------------------------------

let str = "Hello World Java";

let list_str = str.split(" ");
let rep_char = '-';
let NewStr = list_str.join(rep_char);


//-----------------------------------------------------------------------------------

let input2 = '[18, 3, -2, 4, 0, -8, 7]';

let obj2 = JSON.parse(input2);

let res = obj2
        .filter(num=>num>=0)
        .map(num=>num*2)
        .reduce((acc, num)=>num+acc, 0);
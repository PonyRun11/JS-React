"use strict";

//const answer = prompt("Есть 18?", "18");
//console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('Сколько Вам лет?', '');

// console.log(answers);


// // условия 
// const num = 50;
// if (num < 49) {
//    console.log('Err');
//    } else if (num > 100) {
//       console.log('Много');
//    } else {
//       console.log('OK');
//    }

// (num===50) ? console.log('OK') : console.log('Err'); // укороченная запись с помощью тернарного оператора ?

// switch(num) {
//    case 49:
//       console.log('No');
//       break;
//    case 50:
//       console.log('yeas');
//       break;
//    default:
//       console.log('No'); 
//       break;
// }

// ЦИКЛЫ
// let num = 50;

// while (num < 55) {
//    console.log(num);
//    num++;
// }

// do {
//    console.log(num);
//    num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++; 
// }


// ФУНКЦИИ
// // стрелочная функция
// const calc = (a, b) => a + b ;
// console.log(calc(5, 6));

// МЕТОДЫ И СВОЙСТВА

// const logg = "Hello world";

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));
// console.log(isNaN(test));

// CALLBACK 

// function learnJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// } 

// function done() {
//    console.log('Я прошел этот урок!');
// }

// learnJS('Java', done);


// ОБЪЕКТ

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function(){
//       console.log("Test");
//    }
// };

// options.makeTest();

// // диструктуризация объекта

// const{border, bg} = options.colors;
// console.log(border);

// // console.log(Object.keys(options).length);

// // console.log(options['colors']['border']);

// delete options.name;
// console.log(options);

// for (let key in options) {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


// перебор всех свойств объекта

// let counter = 0;
// for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//          counter++;
//       }
//    } else {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//    counter++;
//    }
// }
// console.log(counter);

// МАССИВЫ 

const arr = [2, 7, 6, 8, 10];

// // sort с этой функцией сортирует цифры по порядку как числа , а не как строки
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
//    return a - b;
// }

// // если добавить элемент в определенный индекс, то остальные элементы создадутс и будут пустые
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr); 

// arr.pop();
// arr.push(10);

// Перебор элементов массива
// for(let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (let value of arr) {
//    console.log(value);
// }

//  arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
//  });

// // разрезает строку по указанному разделителю и возвращает массив
// const str = "zhgsdg, ksdjs, ssk";
// const products = str.split(", ");
// // sort сортирует массив по алфафиту принимая данные как строки
// products.sort();
// //join выводит массив в виде строки с указанным разделителем
// console.log(products.join('; '));


// // ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ ДАННЫХ СЛОЖНЫХ ПЕРЕМЕННЫХ 

// function copy(mainObj) {
// // создаем переменную в которую будем копировать 
//    let objCopy = {};
// // с помощью перебора объекта for in присваиваем все значения в объявленную выше переменную
//    let key;
//    for (key in mainObj) {
//       objCopy[key] = mainObj[key];
//    }
// // возвращаем новую переменную
//    return objCopy;
// }

// const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//       x: 7,
//       y: 4
//    }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//    d: 17,
//    e: 20
// };

// // создает независимый повнрхностный объект соединяя два объекта(не считая вложенных данных)
// console.log(Object.assign(numbers, add));

// // соединение с пустым объектом создает копию 
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);


// // создание копии массива

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'kjshdsh';
// console.log(newArray);
// console.log(oldArray);

// // ES6

// const video = ['a', 'b', 'c'],
//       blogs = ['d', 'e', 'f'],
//       internet = [...video, ...blogs, 'g', 'h'];

// console.log(internet);

// // передача массива в виде строки в функцию 
// function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
// }

// const num = [2, 5, 10];
// log(...num);

// // создание копии массива

// const array = ['a', 'b'];
// const newArray = [...array];

// // создание копии объекта ES9

// const q = {
//    one: 1,
//    two: 2
// };

// const newObj = {...q};
// console.log(newObj);

// ООП

const soldier = {
   health: 400,
   armor: 100,
   sayHello: function() {
      console.log("hello");
   }
};

// const john = {
//    health: 100
// };

// присвоение наследования John от soldier после создания переменной john
Object.setPrototypeOf(john, soldier);


john.sayHello();
console.log(john.armor);

// присвоение наследования при создании объекта
const john = Object.create(soldier);

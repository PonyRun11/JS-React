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
//стрелочная функция
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

const arr = [2, 3, 6, 8, 10];

//если добавить элемент в определенный индекс, то остальные элементы создадутс и будут пустые
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

//разрезает строку по указанному разделителю и возвращает массив
const str = "jhgsdg, ksdjs, ssk";
const products = str.split(", ");
//join выводит массив в виде строки с указанным разделителем
pr

console.log(products.join('; '));
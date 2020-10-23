// function numberToPower(number, power) {
//   // Code here
//   let total = number;

//   for (let i = 1; i < power; i += 1) {
//     total *= number;
//   }
//   if (power === 0) {
//     total = 1;
//     console.log(total);
//   }
//   return total;
// }

// console.log(numberToPower(10, 3));

// function numberToPower(number, power) {
//   if (power === 0) return 1;
//   return number * numberToPower(number, power - 1);
// }

// console.log(numberToPower(10, 1));

// function numberToPower(number, power) {
//   if (power === 0) return 1;
//   let total = number;
//   total **= power;
//   return total;
// }

// console.log(numberToPower(10, 2));

// function add(a, b) {
//   // code here
//   return a == b;
// }
// console.log(add("11", 12));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// 1.1
// Объяви две переменные хранящие название и цену товара: name и price
// Присвой переменным следующие характеристики товара (сразу при объявлении)
// название: Генератор защитного поля
// цена: 1000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'.
// Присвой товару новую цену - 2000
// Используя шаблонную строку выведи в консоль информацию о товаре, получится: 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'.

// let name = "Генератор защитного поля";
// let price = 1000;
// console.log(` Выбран ${name}, цена за штуку ${price} кредитов `);
// price = 2000;
// console.log(` Выбран ${name}, цена за штуку ${price} кредитов `);

// 1.2
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 120;

// let result =
//   ordered <= total
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно твоаров!";

// console.log(result);

// const total = 100;
// const ordered = 20500;

// let message = "На складе недостаточно твоаров!";
// if (ordered <= total) {
//   message = "Заказ оформлен, с вами свяжется менеджер";
// }

// console.log(message);

// 1.3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// let userPassword = prompt("Pelase, insert your password");
// if (userPassword === null) {
//   message = "Отменено пользователем!";
// } else if (ADMIN_PASSWORD === userPassword) {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }

// alert(message);
// 1.4

// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

// const credits = 23580;
// const pricePerDroid = 3000;

// let order = prompt("Please enter amount of items");
// console.log(typeof order);

// let totalPrice = order * pricePerDroid;
// console.log(totalPrice);
// let restCredit = credits - totalPrice;

// if (order === null) {
//   console.log("Отменено пользователем!");
// } else if (Number(order) === 0 || isNaN(Number(order))) {
//   // ???????? Не рабоаттет NaN
//   console.log("Введите целое число больше 0");
// } else if (totalPrice > credits) {
//   console.log("Недостаточно средств на счету!");
// } else if (totalPrice <= credits) {
//   console.log(
//     `Вы купили ${order} дроидов, на счету осталось ${restCredit} кредитов.`
//   );
// }

// 1.5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let price;
// let message = "";
// let countryName = "";

// console.log(countryName);
// const refused = "В вашей стране доставка не доступна!";
// const notification = "Еблан, введи название страны!";
// const canceled = "Отмененно пользователем!";
// const approved = `Доставка в ${countryName} будет стоить ${price} кредитов`;

// let country = prompt("Введите страну доставки!");
// console.log(country);

// if (country === null) {
//   message = canceled;
// } else if (country == "") {
//   message = notification;
// } else {
//   countryName =
//     country.slice(0, 1).toUpperCase() + country.slice(1).toLowerCase();
// }

// console.log(countryName);
// switch (countryName) {
//   case "Китай":
//     price = 100;
//     break;
//   case "Чили":
//     price = 120;

//     break;
//   case "Австралия":
//     price = 250;

//     break;
//   case "Индия":
//     price = 170;

//     break;
//   case "Ямайка":
//     price = 80;
//     break;

//   default:
//     console.log(refused);
// }

// if (price > 0) {
//   console.log(`Доставка в ${countryName} будет стоить ${price} кредитов`);
// }

// console.log(message);

// from CodeWars

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// const reverseWords = function (str) {
//  return str.split("").reverse().join("").split(" ").reverse().join(" ");
// };

// console.log(reverseWords("Hello Kitty"));
// _______--___________----- __________

//     function reverseWords(str) {
//   // Go for it
//   let array = str.split(" ");

//   const reversed = array.map(function (item) {
//     return item.split("").reverse().join("");
//   });

//   return reversed.join(" ");
// }

// console.log(reverseWords("Hello Kitty"));

// from CodeWars

// function hero(bullets, dragons) {
//   //Get Coding!
//   return bullets === dragons * 2 ? true : false;
// }

// console.log(hero(11, 5));

// from CodeWars
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//   console.log(str.slice(1, -1));
// }

// console.log(removeChar("yi3werwere"));

// from CodeWars

// function isTriangle(a, b, c) {
//   return a + b > c && b + c > a && a + c > b;
// }

// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));

// from CodeWars

// function isPangram(string) {
//   //...

//   let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
//   console.log(alphabet);
//   for (const letter of alphabet) {
//     if (string.toLowerCase().includes(letter)) {
//       continue;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("abcdefghijklmopqrstuvwxyz"));

// from CodeWars

// function sakuraFall(v) {
//   // your code here
//   const height = 400;

//   if (v < 0) {
//     return 0;
//   }
//   return height / v;
// }

// console.log(sakuraFall(5));
// console.log(sakuraFall(10));
// console.log(sakuraFall(-1));

// from CodeWars

// function mirror(data) {
//   /* go ahead */
//   let newArray = data.slice();
//   let newOrder = newArray;
//   newOrder.sort(function (a, b) {
//     return a - b;
//   });

//   console.log(newOrder);

//   return [...newOrder, ...newOrder.reverse().slice(1)];
// }

// // console.log(mirror([2, 3, 1, 90, 56, 32, 87]));
// // console.log(mirror([926, 700, 420, -903, -917, 285, -61, 651, -938, -487]));
// console.log(mirror([-136, -204, -216, -293, -32, -676, -775, 165, 178, 487]));
// // console.log(mirror([1, 2]));
// // console.log(mirror([1, 5, 4]));
// // console.log(sakuraFall(-1));

// 1.6
// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt("Гони число");

//   if (input === null) {
//     alert(`Общая сумма чисел равна ${total}`);
//     break;
//   }

//   input = Number(input);
//   let notANUmber = Number.isNaN(input);
//   if (notANUmber) {
//     alert("ВВЕДИ Число!!!!");
//     continue;
//   }

//   total += Number(input);
// }

// 2.1

// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const logItems = function (array) {
//   // твой код
//   let message = "";
//   for (let i = 0; i < array.length; i += 1) {
//     message += `${i + 1} - ${array[i]}\n`;
//   }
//   return message;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

// console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));

// 2.2
// Напиши скрипт подсчета стоимости гравировки украшений. Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let price = message.split(" ").length * pricePerWord;

//   return price;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// 2.3

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//     (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   let array = string.split(" ");
//   let longestWord = " ";
//   for (let word of array) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// 2.4 ???????????????????????

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов, то функция обрезает строку до 40 - ка символов и добавляет в конец строки
// троеточие '...', после чего возвращает укороченную версию.

// const formatString = function (string) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );


// ДЗ- 5.5




// // 4.3 compute Consumer Price Index (CPI)
// const stringBasket = '1 hamburger, 4 hotdog, 2 coke, 4 milk'  // YOU HAVE STRING


// const data = { // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };

// const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 } // temporarily yearData

// const parseBasket = (basket) => {
//     const goods = basket.split(", ");
    
//     const result = {};
 

//     for (const good of goods) {
//         const [count, name] = good.split(" ");
//       result[name] = Number(count);
      
//   }

//   return result;
// };

// const basket = parseBasket(stringBasket);

// console.log(parseBasket(stringBasket));


// const countYearBasket = (basket, year) => {
//     const basketEntries = Object.entries(basket);
//     // console.log(basketEntries);
//   let sum = 0;

//   for (const basketEntry of basketEntries) {
//     const [name, count] = basketEntry;
//     const priceFromYear = year[name];
      
//     sum += priceFromYear * count;
//   }

//   return sum;
// };

// console.log(countYearBasket(basket, yearData));

// const getBasketPerYears = (basket, data) => {

//     const yearByYear = Object.entries(data)
//     console.log(yearByYear);
//     let costByyear = [];
//     let prices = {}
//      console.log(prices);
//     for (const entry of yearByYear) {
//         prices = entry[0]
//     }

 
// }

// console.log(getBasketPerYears(basket, data));

//  // write some code to get solution 
//   // use existing functions
//   // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
// //   const prices = { 
// //       2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
// //       2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
// //       2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
// //   }



// const hotel = {
//   name: 'Resort hotel',
//   showThis() {
//     const fn = function () {
//       /*
//        * Стрелки запоминают контекст во время объявления,
//        * из родительской области видимости
//        */
//       console.log('this in fn: ', this);
//     };

//    fn()
//     console.log('this in showThis: ', this);
//   },
// };

//  hotel.showThis();


// this in fn: {name: 'Resort hotel', showThis: ƒ}
// this in showThis: {name: 'Resort hotel',showThis: ƒ}



// function riders(stations) {
//   // Your code here!
//   let total = 1;
//   let distance = 0;
  
//   for (let i = 0; i < stations.length; i += 1) {
   
    
//     // distance < 100 ? distance += station : total += 1 && distance = 0;
//     if (distance + stations[i] > 100) {
//       total += 1
//       distance = stations[i]
//       console.log(distance);
//     } else  {
//       distance += stations[i]
    
//     }
    
//   }
//   return total 
// }



// console.log(riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]));


// // == task-3 == //
// Написати ф-ю яка приймає 2 параметра (розміри в ремах - "2rem) і велечину базового шрифта ("20px") 
// і вертає конвертований розмір в пікселях

// const convertToPixel = (rem, pixel) => rem * pixel;

// console.log(convertToPixel(5,30));

// // == task-4 == //
// Написати ф-ю що приймає число (температура в цельсіях) і виводить результат в фаренгейтах

// const convertToFahrenheit = (celsius) => (celsius * 9 / 5) + 32;

// console.log(convertToFahrenheit(30));

// // == task-5 == //
// Написати ф-ю calculateDogAge яка приймає один параметр - вік собачки. 
// Результатом її роботи буде вік перевединий на людський(1 рік собаки це 7 років в людини)

// const calculateAge = (dogAge) => dogAge * 7;

// console.log(calculateAge(10));

// // == task-7 == //
// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

// const nonUniqueElements = (array) => {
 
//  return 
// }

  
// console.log(nonUniqueElements([1, 2, 3, 1, 3])) // [1, 3, 1, 3]
// // nonUniqueElements([1, 2, 3, 4, 5]) // []
// // nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
// // nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]

// !!!!!!!!!!!MODULE 5!!!!!!!!!!
// TASK 1
 // Write code under this line
// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function() {
//     console.log(`login: ${this.login}, email: ${this.email}`);
    
//     return `login : ${this.login}, email: ${this.email}`;
// };

// // console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account( 'Mangozedog', 'mango@dog.woof');
// // console.log(mango.getInfo()); 
// 'login : Mangozedog, email: mango@dog.woof'
// console.log(mango);
// const poly = new Account( 'Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'




// TASK 2 
 // Write code under this line
// class User {
//     constructor (name, age, followers) {
//         this.name = name;
//         this.age = age;
//         this.followers = followers;
//     }
//     getInfo(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`) 
//         return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     }
   
//   }


// console.log(typeof User);
// // 'function'

// // const mango = new User('Mango', 2, 20);
// // console.log(mango.getFullInfo()); 
// // // 'User Mango is 2 years old and has 20 followers'

// // console.log(typeof mango.getInfo); 
// // 'function'  

// const poly = new User( 'Poly', 3, 17);
// console.log(poly.getInfo());
// // 'User Poly is 3 years old and has 17 followers'


// TASK 3

 // Write code under this line
// class Storage{
//   constructor (items){
//     this.items = items
//   }
  
//     getItems() {
//         return this.items
//     }

//     addItem(item) {
//         this.items.push(item)
//     }
//     removeItem(item) {
//         this.items.includes(item) ? this.items.splice(this.items.indexOf(item), 1) : this.addItem(item)
//         console.log(this.items.includes(item));
//         console.log(item);
//      }
  
// }

//  console.log(typeof Storage);
// // 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

// const storage = new Storage(goods);

//  console.log(storage.getItems());
// // /* [
// //   'Нанитоиды',
// //   'Пролонгер',
// //   'Железные жупи',
// //   'Антигравитатор'
// // ] 

// storage.addItem('Дроид');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
// /* [
//   'Нанитоиды',
//   'Железные жупи',
//   'Антигравитатор',
//   'Дроид'
// ] */



// TASK 4
// class StringBuilder {
//     constructor(value) {
//     this._value = value;
//     }
    
// get value() {
//     return this._value;
//   }

//     append(str) {
//     this._value = `${this._value}${str}`;
//         return this._value
//     }

//     prepend(str) {
//         this._value = `${str}${this._value}`;
    
//         return this._value
//     }
//     pad(str) {
//     this.append(str)
//     this.prepend(str)
        
//     }
// }


//  console.log(typeof StringBuilder);
// // 'function'


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// TASK 5

// class Car {
  
//     constructor({ maxSpeed, price }) {
//         this.speed = 10;
//         this._price = price;
//         this.maxSpeed = maxSpeed;
//         this.isOn = false;
//         this.distance = 0;
//     }
    
//     static getSpecs(car) {
//       return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
//   }
//     get price() {
//       return this._price
//   }
//     set price(value) {
//       this._price = value
//   }
//     turnOn() {
//    this.isOn = true;
//   }
//     turnOff() {
//         this.isOn = false;
//         this.speed = 0 
//   }
//     accelerate(value) {
//         return this.speed + value <= this.maxSpeed ? this.speed += value :
//             this.speed = this.maxSpeed
//   }
//     decelerate(value) {
//         return this.speed - value > 0 ? this.speed -=value : this.speed = 0
      
//   }
//     drive(hours) {
      
//       console.log(this.distance += this.speed * hours);
      
//   }
// }
 
// const mustang = new Car({ maxSpeed: 200, price: 2000 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// console.dir(Car.getSpecs(mustang));
// console.dir(mustang);
// console.log(mustang.accelerate(50));
// // 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(250);
// mustang.drive(1);
// mustang.turnOff();


// console.log(Car.getSpecs(mustang));
// // 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.dir(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000




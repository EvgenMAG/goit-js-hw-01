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



// !!!!!!!!!!ЗАМЫКАНИЕ - CLOSURE!!!!!!!!!!!!!!!!!!
/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/


/*
  Для функции в ее [[Environment]] записывается ссылка 
  на глобальный environment .
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
// const makeShef = function (name) {
//      const x = 123;
//     /*
//   makeShef env - создается при исполнении файла скрипта
//     Record: {name: Mango, x = 123}
//     Parent: Global env
// */
 
//     // [[Environment]] = makeShef env
//     return function makeDish(dish) {
       
//       /*
//   makeDish env - создается при исполнении файла скрипта
//     Record: { dish: 'apple pie'}
//     Parent: makeShef env
// */
//     console.log(`${name} is cooking ${x} ${dish}`);
//   };
// };

// /*
//   Global env - создается при исполнении файла скрипта
//     Record: {makeShef: f}
//     Parent: null
// */

// const mango = makeShef('Mango');

// /*
//   Global env - создается при исполнении файла скрипта
//     Record: {makeShef: f, mango: f}
//     Parent: null
// */



// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew
// console.dir(mango)

// const poly = makeShef('Poly');
// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon

/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

// [[Environment]] = fnA env

// const fnA = function (a) {
//     // fnA env 
// //     Record: {a}
// //     Parent: Global env

//     // [[Environment]] = fnB env
//     return function fnB(b) {

//         // fnB env 
// //     Record: {b}
// //     Parent: fnA env 

//         // [[Environment]] = fnC env
//         return function fnC(c) {
//                  // fnC env 
// //     Record: {c}
// //     Parent: fnB env 
//             console.log(a+b+c); 
//          }
//     }     
    
// }

// /*
//   Global env - создается при исполнении файла скрипта
//     Record: {fnA: f}
//     Parent: null
// */


// const sum = fnA(4)(5);
// sum(6)
// console.dir(sum);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// // == task-1 == //
// Створити простенький калькулятор за допомогою класу.
// Цей клас буде мати такі методи:
// 1. Метод що запитує в користувача 2 числа
// 2. Метод що додає ці числа
// 3. Метод що віднімає ці числа
// 4. Метод що перемножує ці числа
// 5. Метод що ділить ці числа
// 6. Метод що виводить результат арефметичної операції на екран в форматі `Результат операції ${value}`
// цей метод запускаєтьсяв кінці кожного з методів 2-5
// 7. Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
// 8. Передати в метод №7 колбек ф-ю що підносить числа в степінь
// 9. Написати всі методи і перевірити чи вони працюють

// class Calculator {

//     constructor(a, b) {
//         this.a = a
//         this.b = b
// }  

//     addFigures() {
//          const value = this.a + this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }
    
//     deductFigures() {
//         const value = this.a - this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }
//     multFigures() {
//         const value = this.a * this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
        
//      }
//     divideFigures() {
//         const value = this.a / this.b
//         return function result(){
//             console.log(`Результат операції ${value}`)
//         }
//     }

//     elevateFigures() {
//         const value = calculator.a ** calculator.b
//         return value
//     }

//    data(cb) {
//        let result = cb()
//        console.log(result)

// };

// }

// const calculator = new Calculator(6, 2)

// const sum = calculator.addFigures()
// const deduction = calculator.deductFigures()
// const multiply = calculator.multFigures()
// const divide = calculator.divideFigures()
// const callback = calculator.elevateFigures
// const elevate = calculator.data(callback);




// sum()
// deduction()
// multiply()
// divide ()


// // == task-2 == //
// Створити класи Library та Book

// 1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
// Також цей клас буде мати такі методи:

// - Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
// - Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
// - Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
// - Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених
// - Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені
// - Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
// - Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

// 2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
// - author
// - title
// - price
// - totalPages
// - currentPage

// Також цей клас буде мати такі методи:

// - Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
// - Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки
// - Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість
// Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта


// class Book {
//     constructor(book) {
//         this.author = book.author;
//         this.title = book.title;
//         this.price = book.price;
//         this.totalPages = book.totalPages;
//         this._currentPage = book.currentPage;
// }
    
//     redBook(amount) {
//         return this._currentPage = amount
//     }
    
//      get bookProgres() {
//     return this._currentPage * 100/ this.totalPages
//   }

//   set bookProgres(value) {
//     this._currentPage = this.totalPages * value / 100;
//   }

// }


// const book = { author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123 };
// const bookItem = new Book(book)



// console.dir(bookItem.redBook(250))
// console.log(bookItem)
// bookItem.bookProgres = 50
// console.log(bookItem.bookProgres)
// console.log(bookItem)

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);



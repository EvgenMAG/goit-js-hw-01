// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

//     Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const China = "Китай";
const Chili = "Чили";
const Australia = "Австралия";
const India = "Индия";
const Jamayka = "Ямайка";
const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
let message = "";
let country = "";
let price;

let countryName = prompt("Укажите страну доставки", "");
if (countryName === null) {
  message = CANCELED_BY_USER;
} else if (countryName == "") {
  message = "You forgot to enter the country ";
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {
    case China:
      price = 100;
      break;

    case Chili:
      price = 250;
      break;

    case Australia:
      price = 170;
      break;
    default:
      console.log(NO_DELIVERY);
  }
}

if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);

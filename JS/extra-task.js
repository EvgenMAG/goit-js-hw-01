const countryImputRef = document.querySelector('input[name="country"]');
console.log(countryImputRef.value);
const buttonRef = document.querySelector("button");
console.log(buttonRef);

buttonRef.addEventListener("click", function () {
  console.log("Country", countryImputRef.value);

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

  let countryName = countryImputRef.value;
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
});

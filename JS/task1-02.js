// const total = 100;
// const ordered = 130;
// let notification;
// if (ordered <= total) {
//   notification = "Заказ оформлен, с вами свяжется менеджер";
// } else {
//   notification = "На складе недостаточно твоаров!";
// }
// console.log(notification);

// const total = 100;
// const ordered = 200;

// const notification =
//   ordered <= total
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно твоаров!";
// console.log(notification);

const total = 100;
const price = 15;
const itemImputRef = document.querySelector('input[name="item"]');
const buttonRef = document.querySelector("button");

buttonRef.addEventListener("click", function () {
  const order = Number(itemImputRef.value);
  console.log(order);
  let total = order * price;
  let notification;

  if (order === 0) {
    notification = "Вы не ввели кол-во товара";
  } else if (order <= total) {
    notification = `Заказ оформлен, к оплате ${total} с вами свяжется менеджер`;
  } else {
    notification = "На складе недостаточно твоаров!";
  }
  console.log(notification);
});

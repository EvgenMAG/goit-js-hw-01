// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const userPassword = prompt("Введите пароль!");
// console.log(userPassword);

// if (ADMIN_PASSWORD === userPassword) {
//   message = "Добро пожаловать!";
// } else if (userPassword === null) {
//   message = "Отменено пользователем!";
// } else if (ADMIN_PASSWORD !== userPassword) {
//   message = "Доступ запрещен, неверный пароль!";
// }
// console.log(message);
// alert(message);

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// // Write code under this line
// const inputPassword = prompt("Введите пароль!");
// if (inputPassword === null) {
//   message = CANCELED_BY_USER;
// } else if (ADMIN_PASSWORD === inputPassword.toLowerCase()) {
//   message = ACCESS_IS_ALLOWED;
// } else if (ADMIN_PASSWORD !== inputPassword) {
//   message = ACCESS_DENIED;
// }
// console.log(message);
// alert(message);

function isLoginValid(login, min = 4, max = 16) {
  return min <= login.length && login.length <= max ? true : false;
}

function isLoginUnique(logins, login) {
  return logins.includes(login) ? false : true;
}

function addLogin(logins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;

  if (!isLoginValid(login)) {
    message = ERROR;
  } else if (!isLoginUnique(logins, login)) {
    message = REFUSAL;
  } else if (isLoginValid(login) && isLoginUnique(logins, login)) {
    message = SUCCESS;
    logins.push(login);
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
("Логин успешно добавлен!");

console.log(addLogin(logins, "robotGoogles"));
("Такой логин уже используется!");

console.log(addLogin(logins, "Zod"));
("Ошибка! Логин должен быть от 4 до 16 символов");

console.log(addLogin(logins, "jqueryisextremelyfast"));
("Ошибка! Логин должен быть от 4 до 16 символов");

console.log(logins);

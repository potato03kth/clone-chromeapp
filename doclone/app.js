const loginForm = document.querySelector(".login-formular");
const anker = document.querySelector("body div a");
const head = document.querySelector("body h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.classList.add(HIDDEN_CLASSNAME);
head.classList.add(HIDDEN_CLASSNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginFormSubmit);
} else {
  head.classList.remove(HIDDEN_CLASSNAME);
  head.innerHTML = `Willkommen, ${savedUsername}`;
}

function onLoginFormSubmit(potato) {
  potato.preventDefault();
  console.log(loginForm.querySelector("input").value);
  const username = loginForm.querySelector("input").value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  head.classList.remove(HIDDEN_CLASSNAME);
  head.innerHTML = `Willkommen, ${username}`;
  localStorage.setItem(USERNAME_KEY, username);
}

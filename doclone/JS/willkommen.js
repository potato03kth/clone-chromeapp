const loginForm = document.querySelector(".login-formular");
const anker = document.querySelector("body div a");
const head = document.querySelector("body h1");
const idiot = document.querySelector("h2 a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

loginForm.classList.add(HIDDEN_CLASSNAME);
head.classList.add(HIDDEN_CLASSNAME);

idiot.addEventListener("mouseover", onMouseHover);
idiot.addEventListener("mouseout", onMouseOut);

function onMouseHover() {
  idiot.classList.add("violet");
}
function onMouseOut() {
  idiot.classList.remove("violet");
}

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
  idiot.classList.remove(HIDDEN_CLASSNAME);
  idiot.textContent = `안녕하세요 ${username}님, 좆돼지새끼라고 불러도 되죠?`;
}

const loginForm = document.querySelector(".login-formular");
const anker = document.querySelector("body div a");

function onLoginBtnClick() {
  //   console.dir(loginInput);
  //   console.log("ein Klicken!");
}

function onLoginFormSubmit(potato) {
  potato.preventDefault();
  console.log(loginForm.querySelector("input").value);
}

function onAnkerClick(event) {
  event.preventDefault();
  //   alert("kann sich nicht nähern", anker.href);
  console.log('kann sich nicht nähern"', anker.href, '"');
  console.log(event);
}

anker.addEventListener("click", onAnkerClick);
loginForm.addEventListener("submit", onLoginFormSubmit);

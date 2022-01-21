const loginForm = document.querySelector(".login-formular");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
  //   console.dir(loginInput);
  console.log("ein Klicken!");
  //   console.log(loginInput.value);
  const value = loginInput.value;
  if (value === "") {
    alert("nicht leer lassen, Bitte geben Sie Ihren Namen ein");
  } else {
    console.log("Willkommen,", value);
    alert("Willkommen,", value);
  }
}

loginButton.addEventListener("click", onLoginBtnClick);

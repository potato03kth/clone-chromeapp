const dlc = document.querySelector(".day-light-copy");
alert(dlc.innerHTML);

function superEventHandler(a) {
  dlc.innerHTML = "큰거온다...";
  console.log(a);
}

dlc.addEventListener("click", superEventHandler() { dlc.innerHTML = "bigger from event Listener"; });

// function handlerClick() {
//   dlc.innerHTML = "Oh, what was that? stop click me!";
// }
// function handlerHover() {
//   dlc.innerHTML = "wanna click me now?";
// }
// function handlerPageResize() {
//   dlc.innerHTML = "You Resized my house!";
//   document.getElementsByClassName("day-light-copy").style.color = "blue";
// }
// function handlerHoverOut() {
//   dlc.innerHTML = "Oh, you don't wanna bodrting me now!";
// }
// function handlerClickRight() {
//   dlc.innerHTML = "Ouch!";
//   document.getElementsByClassName("day-light-copy").style.color = "Red";
// }

// dlc.addEventListener("click", handlerClick);
// dlc.addEventListener("onmouseover", handlerHover);
// dlc.addEventListener("onmouseout", handlerHoverOut);
// dlc.addEventListener("resize", handlerPageResize);
// dlc.addEventListener("contextmenu", handlerClickRight);

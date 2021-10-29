var size = document.querySelector("header");

var x = window.innerWidth;
//!?
//!
// todo
////asdfasdf///////

window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  size.textContent = innerWidth;
};

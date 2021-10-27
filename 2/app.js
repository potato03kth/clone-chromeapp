var size = document.querySelector("header");

var x = window.innerWidth;

window.onresize = function (event) {
  var innerWidth = window.innerWidth;
  size.textContent = innerWidth;
};

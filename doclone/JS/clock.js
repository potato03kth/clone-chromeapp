const uhr = document.querySelector(".clock");

const date = new Date();

let hour = 0;
let ampm = 0;
let second = 0;

function getClock(fullHour = true, autoConvert = false) {
  if (autoConvert == false && date.getSeconds() < 10) {
    second = "0" + date.getSeconds().toString();
  } else {
    second = date.getSeconds().toString();
  }

  if (fullHour == true) {
    hour = date.getHours();
  } else if (fullHour == false) {
    if (0 <= date.getHours() && date.getHours() < 12) {
      ampm = "AM";
      hour = date.getHours();
    } else if (date.getHours() === 12) {
      ampm = "PM";
      hour = date.getHours();
    } else {
      ampm = "PM";
      hour = date.getHours() - 12;
    }
  }

  uhr.innerHTML = `${hour}:${date.getMinutes()}:${second}`;
  //   uhr.innerHTML =
  //     hour.toString() +
  //     ":" +
  //     date.getMinutes().toString() +
  //     ":" +
  //     second.toString();
}

getClock();
setInterval(getClock, 1000);

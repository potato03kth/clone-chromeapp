const uhr = document.querySelector(".clock");

const date = new Date();

let hours = 0;
let ampm = 0;
let second = 0;

function getClock(fullHour = true, autoConvert = false) {
  if (autoConvert == false && date.getSeconds() < 10) {
    second = "0" + date.getSeconds().toString();
  } else {
    second = date.getSeconds().toString();
  }

  if (fullHour == true) {
    hours = date.getHours();
  } else if (fullHour == false) {
    if (0 <= date.getHours() && date.getHours() < 12) {
      ampm = "AM";
      hours = date.getHours();
    } else if (date.getHours() === 12) {
      ampm = "PM";
      hours = date.getHours();
    } else {
      ampm = "PM";
      hours = date.getHours() - 12;
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

function getClochWithMeridiem() {
  if (date.getHours() < 12) {
    ampm = "AM";
    hours = date.getHours();
  } else if (date.getHours() == 12) {
    ampm = "PM";
    hours = date.getHours();
  } else {
    ampm = "PM";
    hours = date.getHours() - 12;
  }
  hours = String(hours).padStart(2, "0");
  minutes = date.getMinutes();
  minutes = String(minutes).padStart(2, "0");
  seconds = date.getSeconds();
  seconds = String(seconds).padStart(2, "0");

  uhr.innerHTML = `${ampm} ${hours}:${minutes}:${seconds}`;
}

// getClock();
// setInterval(getClock, 1000, [true, true]);
// if (true) {
//   setTimeout(getClock, 1000);
// }
getClochWithMeridiem();
setInterval(() => {}, interval);
setInterval(getClock, 1000, true, false);

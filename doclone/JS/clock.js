const uhr = document.querySelector(".clock");

// const date = new Date();

let hours = 0;
let ampm = 0;
let second = 0;
// debugger;

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

let test = (is24Hour = true, isAutoPadding = true) => {
  let padCheckPoint = (isAutoPadding_ = false, number, stroke, latter) =>
    isAutoPadding_ ? String(number).padStart(stroke, latter) : String(number);
  let makeTimeOnSet = (is24Hour, hours, minutes, seconds) => {};

  if (is24Hour) {
    // ? 24hour mode
    // TODO check isAutoPadding in conditional padCheckPoint())
  } else {
    // ? meridiem mode
    // TODO chech isAutoPadding, and
  }
};

function getClochWithMeridiem() {
  let date = new Date();
  let ampm;
  let hours;
  let minutes;
  let seconds;

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
  let numberPad = (number, stroke, latter = String) =>
    String(number).padStart(stroke, latter); //* auto padding fuction for number
  hours = numberPad(hours, 2, "0");
  minutes = date.getMinutes();
  minutes = numberPad(minutes, 2, "0");
  seconds = date.getSeconds();
  seconds = numberPad(seconds, 2, "0");

  uhr.innerHTML = `${ampm} ${hours}:${minutes}:${seconds}`;
  // console.log("cycle from ampm clock");
}

// getClock();
// setInterval(getClock, 1000, [true, true]);
// if (true) {
//   setTimeout(getClock, 1000);
// }
getClochWithMeridiem();
// setInterval(() => {}, interval);
// setInterval(getClock, 1000, true, false);
// setInterval(() => {

// }, interval);

setInterval(getClochWithMeridiem, 1000);
// setInterval(() => {
//   console.log("giqte");
// }, 1000);

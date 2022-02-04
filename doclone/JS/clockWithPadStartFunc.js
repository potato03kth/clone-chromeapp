// const uhr = document.querySelector(".clock");

const date = new Date();

const paddingSeconds = date.getSeconds();

uhr.innerHTML = `${hour}:${date.getMinutes()}:${paddingSeconds.padStart()}`;

// 다른 주석 문법

// TODO 자바스크립트도 물론 해야 할 일이 있습니다.

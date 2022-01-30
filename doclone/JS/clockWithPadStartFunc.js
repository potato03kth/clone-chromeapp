// const uhr = document.querySelector(".clock");

const date = new Date();

const paddingSeconds = date.getSeconds();

uhr.innerHTML = `${hour}:${date.getMinutes()}:${paddingSeconds.padStart()}`;

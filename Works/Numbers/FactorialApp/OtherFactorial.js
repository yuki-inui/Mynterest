function a() {
  setInterval('randomNumber()', 10000);
}

function randomNumber() {
  Math.floor(Math.random() * 100);
}

console.log(randomNumber());

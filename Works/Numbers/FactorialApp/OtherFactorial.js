function randomNumber() {
  console.log(Math.floor(Math.random() * 100));
}

setInterval(randomNumber, 10000);

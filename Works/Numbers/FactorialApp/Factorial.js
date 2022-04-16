let fractorial = (num) => {
  let j = 1;
  for(let i = 1; i <= num; i++){
    j *= i;
  }
  return j;
};


const EveryNumber = (fractorial) => {
  let sum = 0;
  while(fractorial > 0){
    sum += fractorial % 10;
    fractorial /= 10;
  }
  return sum;
};
console.log(Math.ceil(EveryNumber(fractorial(12))));

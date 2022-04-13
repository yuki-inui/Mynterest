let fractorial = (num) => {
  let j = 1;
  for(let i = 1; i <= num; i++){
    j *= i;
  }
  return j;
};


const EveryNumber = (fractorial(n)) => {
  let sum = 0;
  while(fractorial(n) > 0){
    sum += fractorial(n) % 10;
    fractorial(n) /= 10;
  }
  return sum;
};


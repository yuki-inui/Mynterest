{
let sum = 0;
for(let i = 1; i < 101; i++){
  
    sum += i;
  
}

console.log(sum);
}

{
let count = 0;
for(let i = 1; i < 301; i++){
  if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
    count += 1
  }
}
console.log(count);
}

{
  
  
  let SumNumbers = (n) => {
    let sum = 0;
    while(n > 0){
      sum += n % 10;
      n /= 10;
    }
    return sum;
  };
  console.log(Math.floor(SumNumbers(1234))); //why
}

{
  function factorial(num) {
    let i = 1;
    for(let j = 1; j <= num; j++){
      i *= j;
    }
    return i;
  }
  console.log(factorial(12));
  }

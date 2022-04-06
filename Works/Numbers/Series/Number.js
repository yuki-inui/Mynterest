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
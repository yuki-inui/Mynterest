
// 格桁の数字を足す
const AddEveryParts = (num) => {
    let sum = 0;
    while(num > 0){
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };

// もし格桁の合計１０より大きかったら別の処理する

console.log(AddEveryParts(234456));

{
for(let i = 1; i < 101; i++){
  if(i % 3 === 0){
    console.log("fizz");
  } else if (i % 5 === 0){
    console.log("buzz");
  } else if (i % 15 === 0){
    console.log("fizzbuzz");
  } else{
    console.log(i);
  }
}
}

console.log(33);
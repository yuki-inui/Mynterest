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
if(AddEveryParts >= 10){
  console.log("Over10");
}

console.log(AddEveryParts(1235));

{
  const fibonacci = (num) => {
    if(num === 0){
      return 0;
    }else if(num === 1){
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  const length = 45;
  for(let i = 0; i <= length; i++){
    console.log(fibonacci(i));
  }
}
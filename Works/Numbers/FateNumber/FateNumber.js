const { convertCompilerOptionsFromJson } = require("typescript");

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
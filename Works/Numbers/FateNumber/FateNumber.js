const AddEveryParts = (num) => {
    let sum = 0
    while(num > 1){
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };


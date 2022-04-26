/*入力条件：0より小さい数字は入力できないようにする(エラー表示or出力されなくなる)  
  出力条件：0.75以下の数字は0.75に繰上げられる。
	　　0.25刻みで数字が換算される。全て繰上げで換算される。 ex) 1.68：1.75, 0.85:1.00  */
{
const unit = 0.25;
const ConcreteQuantity = 7.87
const result = ConcreteQuantity >= 0.75 ? Math.ceil(ConcreteQuantity / unit) * unit : 0.75;
result.toFixed(2);
console.log(result);
}

{
//　予算の算定　限界打設数量を求める。
const budget = 8765789;
const ConcretePrice = 20000;
let result = Math.ceil(budget / ConcretePrice);

console.log(`限界打設数量は${result}m^3です。`);
}



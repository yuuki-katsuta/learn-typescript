export { };

//関数に対するアノテーションは、引数と戻り値に型注釈
//関数の戻り値にアノテーションするには、()の後ろに型定義をする

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.71, 52));

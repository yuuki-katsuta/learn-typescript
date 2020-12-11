export { };

//無名関数のアノテーション

let bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.71, 52))

//bmiに対してもアノテーションできる（推論で出てくる型を貼り付けるだけ）
// let bmi: (height: number, weight: number) => number = function (height: number, weight: number):
//   number {
//   return weight / (height * height);
// };

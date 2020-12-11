export { };
//アロー関数に対するアノテーション

let bmi = (height:number, weight:number):number => {
  return weight / (height * height);
};

console.log(bmi(1.71, 52))

//bmiに対するアノテーション
// let bmi: (height: number, weight: number) => number = (
//     height: number,
//     weight: number
// ): number => {
//   return weight / (height * height);
// };

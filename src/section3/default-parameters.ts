export { };

//デフォルトパラメーターは関数の引数の初期値
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};


console.log(nextYearSalary(1000)); // 1100

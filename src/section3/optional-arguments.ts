export {};

//関数の引数は省略可能
//typescriptでは、引数名の後ろに？マークを記述してoptional引数（任意の引数）を定義できる


let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi:number = weight / (height * height);
  if (printable) {
    console.log({ bmi })
  }
  return bmi
};

bmi(1.71, 52, true);

// bmi(身長、体重、console.logで出力するかどうか？)
// bmi(1.71, 52, true);
// bmi(1.71, 52, false);
// bmi(1.71, 52);

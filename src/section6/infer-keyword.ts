export {};

//関数の戻り値の型を取得するのにReturnTypeを利用する

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>; //number

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
//infer R で戻り値の型を取得する
//型推論した結果をRに代入するということ

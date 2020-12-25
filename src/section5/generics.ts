export {};

//同じ関数名で、型が異なる場合ジェネリクスを用いる
//抽象的な関数を作ってしまえば、あとから型だけを指定するだけなので実装コスクラスでの

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

//ジェネリクスの使い方
const echo = <T>(arg: T): T => {
  return arg;
};
//<T>はジェネリクスの宣言を意味している。Tが抽象的な型を意味している（NumberにもStringにもなる）
//Tはargの型である。(arg: T): Tより戻り値もTである

console.log(echo<number>(100));
//<number>でTの型をNumberとして(100)で引数を指定

console.log(echo<string>("hello"));
console.log(echo<boolean>(true));

//クラスでのジェネリクス<T>で抽象的な型を定義している
class Mirror<T> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
//抽象的な型のTをNumber型として実行した
console.log(new Mirror<string>("hello, generics!").echo());
console.log(new Mirror<boolean>(!false).echo());

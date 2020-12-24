export {};

//互換性がある場合の挙動
let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible); //undefined

fooCompatible = barCompatible;
//代入できるがどうかは、コンパイラーが型の互換性をチェックしている

console.log(typeof fooCompatible); //string

//互換性がない場合
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible; error

//文字列型同士なので代入可能
let fooString: string;
let barString: string = "string";
fooString = barString;

//文字列リテラル型は文字列型のいち部分なので代入可能
let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
//fooStringLiteralは、fooStringLiteralという文字列しか許さない型
fooString = fooStringLiteral;

//数値リテラル型はNumber型に属しているので代入可能
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976; //1976という数値しか許さない型
fooNumber = fooNumberLiteral;

//オブジェクトの互換性について
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string, public color: String) {}
}

let me: Animal;
me = new Person(43, "yuuki", "yellow");
//オブジェクトを代入するとき、そのオブジェクトの型は関係ない
//代入されるオブジェクトの内部で持つメンバ変数が、代入する側でも存在するか。そのメンバ同士で互換性はあるかを評価

export {};
//クラスのメンバー変数の初期化処理

class Person {
  //constructor関数の引数にアクセス修飾子を付与すると、自動で初期化処理を行ってくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person("ゆうきさん", 22);
console.log(me);

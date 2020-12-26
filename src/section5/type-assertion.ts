export {};
//型アサーション(Type Assertion)とは、その推論された型や、既に型定義済みの変数の型を上書きする (互換性がある場合)

let name: any = "ham";
//asを使う場合
let length1 = name.length as number;
//右辺にas numberを加えることで。変数lengthはnumber型であることを示せる

//別の方法
let length2 = (name as string).length;

// length1 = "foo"; error
// length2 = "foo"; error

//山括弧を使う場合(推奨されていない)
let length3 = (<string>name).length;

// length3 = "foo"; error

// const test1 = {};
// test1.foo = "foo";
// 上testの型はプロパティがゼロのオブジェクトと型推論するため、string型を代入できない

interface Test {
  foo: number;
}

const test = {} as Test;
test.foo = 4;
console.log(test);

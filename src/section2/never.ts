export { };
//関数が値を返す可能性が無い場合、関数の返り値の型はNever型(今回はエラーを投げる)

function error(message: string): never {
  throw new Error(message);
  //throw文ではエラーオブジェクトを例外として投げることができる
  //ErrorオブジェクトのインスタンスはErrorをnewして作成します。 コンストラクタの第一引数には、エラーメッセージとなる文字列を渡します
  //throw文はあらゆるオブジェクトを例外として投げられるが、基本的にErrorオブジェクトのインスタンスを投げる
}

try {
  let result = error('やばいエラー')
  //errorの内部で例外を発生させているのでresultには渡ってこない
  console.log(result)
} catch (error) {
  console.log({error})
}

let foo: void = undefined;
//let bar: never = undefined
//never型には値の概念がないためエラー

let only: never = error('only')
//error()がnever型を返すため唯一代入できる

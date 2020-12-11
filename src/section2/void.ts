export { };
//何もデータが存在しないときvoid型をつかう
//関数からのreturn値を期待しない場合、void型にする

function returnNothing(): void {
  console.log('I do not return anything')
}

console.log(returnNothing())
//関数がなにもreturnしない場合でもundefinedが出力される

//関数の戻り値に対する型指定を行う
//function returnNothing(): void　で関数の戻り値の型を指定できる

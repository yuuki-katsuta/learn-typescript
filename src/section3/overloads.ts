export { };

//同じ関数名で重複して定義していると「 Duplicate function implementation.」が発生
//ここでオーバーロードを使用
//そのためにシグネチャを使用 =>関数の処理の実態を書かずに、関数名、引数、戻り値の型のみを宣言したもの
//シグネチャは関数の実態の前に記述

//↓２行がシグネチャ(ここで型制約の役割を担う)
function double(value: number): number;
function double(value: string): string;

//関数の実体は一つだけ
//オーバーロードでは実態の方では型制約を行わないため、any型にする(型制約はシグネチャが行う)
//valueがstring、numberそれぞれの処理を記述する
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2
  } else {
    return value + value
  }
}

//doubleの引数は、string型かnumber型のみ有効
console.log(double(100))
console.log(double('Go'))

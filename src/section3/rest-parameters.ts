export { };

const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue})
  return accumulator + currentValue;
}

//可変長引数を定義する
//スプレッド構文で宣言された引数は Array
const sum: (...values: number[]) => number = (...values: number[]): number => {
  //valuesは、配列で中身が数値([ 1, 2, 3, 4, 5 ])なのでアノテーションは、: number[]となる
  //またsumは数値を返す
  //console.log(values) => [ 1, 2, 3, 4, 5 ]

  return values.reduce(reducer)
}

console.log(sum(1, 2, 3, 4, 5))



/**
 * reduce() メソッドは、配列の各要素に対して (引数で与えられた) reducer 関数を実行して、単一の出力値を生成する
 * [1, 2, 3, 4].reduce(reducer)

 * { accumulator: 1, currentValue: 2 }
 * { accumulator: 3, currentValue: 3 }
 * { accumulator: 6, currentValue: 4 }   と出力
 *
 * 最初1と2が足されて、3がaccumulatorに代入されて返ってくる。次は、3+3 を実行
*/


/**
残余引数の使い方

function myFun(a,  b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// コンソール出力:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]

*/

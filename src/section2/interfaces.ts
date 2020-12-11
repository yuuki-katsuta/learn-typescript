export { };

//オブジェクトに対するアノテーション→interface

//typeを使ったアノテーション
//typeを使い、ObjectTypeの型を定義した。これを流用する
type ObjectType1 = {
  name: string,
  age: number
}

let object1: ObjectType1 = {
  name: 'yuuki',
  age: 22
}



//interfaceを使ったアノテーション

type ObjectType2 = {
  name: string,
  age: number
}

//interfaceのあとに型の名前を書く（＝は不要）
interface ObjectInterface {
  name: string,
  age: number
}

let object2: ObjectInterface = {
  name: 'yuuki',
  age: 22
}

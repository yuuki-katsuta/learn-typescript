export {};

type MyFunctionType = MyExclude;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//excludeの内部処理
type MyExclude =
  | (string extends string | number ? never : string)
  //striｇとstring | number（stringかnumber）型が互換性があるかを評価している
  //この場合trueなのでコロンの左側が採用(全体の評価結果がneverとなる)
  //never型は「属する値が存在しない型」
  | (number extends string | number ? never : number)
  | (DebugType extends string | number ? never : DebugType); //これはDebugTypeが評価
//よってDebugTypeが帰ってくる
//NonNullableなども、これと同じ処理を行う

type FunctionType = Exclude<SomeTypes, string | number>;
//第一引数のsomeTypesは全体、第２引数にそこから除く型をunion型で記述
//SomeTypeからある型を除外したいときexcludeをつかう

//ある型を抽出したいときextractを使う
type FunctioTypeByExtract = Extract<SomeTypes, DebugType>;
/**
  Extract<SomeTypes, DebugType>;なら
  type Extract<T, U> = T extends U ? T : neverより
  TにはSometypesの型が渡ってきて、その型がU(DebugType)と互換性があるかを評価している
  それをSometypesの型の個数分繰り返している
  評価結果がtrueならコロンの左側を返す
*/

// millやundefinedを除外したいときNonNullableを使う
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

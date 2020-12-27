export {};
//partial型でオブジェクトを生成するときの、内部処理について

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
//これですべてのプロパティがオプショナルなものとなった

/**

 内部処理
 type Partial<T> = {
  [P in keyof T]?: T[P];
 };
 mapped処理でProfileのプロパティをPが一つずつ文字列として受け取り、T[P]でProfileのプロパティ(受け取った)を意味している

 keyof T とは？
 type PropertyTypes = keyof Profile;
 Profileのプロパティを文字列型のunion型として受け取った

*/

//自分でカスタマイズ可能(booleanも許容できるようにしたい)
type Optional<T> = {
  [P in keyof T]?: T[P] | boolean;
};

type OptionaiProfile = Optional<Profile>;

/**
 type OptionaiProfile = {
  name?: string | boolean;
  age?: number | boolean;
 }
*/

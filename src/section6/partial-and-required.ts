export {};

//ユーティリティータイプス
//partial型はすべてのプロパティをオプショナルなものとした新しい型を生成できる

//Type Alias は、複数の場所で再利用しようと思っている型に対して名前をつける
type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

//これで、Profileの型をオプショナルとした型が生成される
/**
  type PartialType = {
    name?: string;
    age?: number;
    zipCode?: number;
  }
*/

//Required型は、すべてのプロパティを必須なものとした新しい型を生成
type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};
type RequiredType = Required<Profile2>;

export {};
//インデックスシグネチャではプロパティへの添え字アクセスに対する型情報を定義します。

/**
  profileに様々なデータを渡したい
  let profile: { name?: string } = {};
  ？でoptional引数（任意の引数）を定義できる

  profile.name = "yuuki";
  profile.age = 22;
*/

//profileにデータを渡すとき、そのたびにオブジェクト側にアノテーションを記述するのは面倒。このときインデックスシグネチャを利用（オブジェクトのキーに対するアノテーションの）

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
//nameとundertwentyは必須の項目となる（初期化する）
//union型(パイプ | )は値が複数の型のどれかに当てはまるような型を表す

let profile: Profile = { name: "Ham", underTwenty: false };

//インデックスシグネチャよりエラーにならない
profile.name = "yuuki";
profile.age = 22;
profile.nationality = "Japan";

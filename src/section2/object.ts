export { };

//object型のアノテーションは狭義のオブジェクトをもつ
let profile1: object = { name: 'yuuki' };
profile1= { age: 23 };

//  {}でもオブジェクトのアノテーションが行われる
let profile2: {} = { name: 'hana' };
profile2 = { age: 23 };

//もっと制約を強くすると、(型推論をそのまま扱う)
let profile3: {
  name: string;
} = { name: 'hana' };
//オブジェクトの値がわかっているならこれを使ったほうが良い

//これでオブジェクトのプロパティにnameが必ず存在することを示している（nameの型も指定している）
//profile3 = { age: 23 };

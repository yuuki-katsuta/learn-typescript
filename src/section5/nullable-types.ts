export {};

//nullを許容してしまうとバグの原因となってしまう
//ageに具体的な数値を定義できないとき、nullableタイプスを使用

let profile: { name: string; age: number | null } = {
  name: "ham",
  age: null,
};

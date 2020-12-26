export {};

//再代入を許したくない場合constアサーションが便利
let name = "yuuki";

name = "Ham";

let nickname = "Ham" as const;
//as constでHam型であると定義

//　nickname = "yuuki";

//profileのプロパティの値を変更したくないときconst アサーションを利用（すべてreadonlyとなる）
let profile = {
  name: "Atsushi",
  height: 189,
} as const;

// profile.name = "yuuki";
// profile.height = 180;

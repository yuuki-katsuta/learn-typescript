export {};
//typescriptでのclassの扱い

class Person {
  //nameとageの型の定義をする
  // メンバ変数 (インスタンス変数)
  name: string;
  age: number;

  //コンストラクターメソッドは、このPersonクラスが作成されるときに呼ばれ、中のメソッドが実行される
  //引数を受け取れる
  constructor(name: string, age: number) {
    //constructor()はreturnしないので、戻り値のアノテーションはいらない
    //Perssonのインスタンスに属する属性をもたせる
    //thisを使って、そのインスタンスの（実態の）属性として設定する
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// newでインスタンス作成
let taro = new Person("Taro", 22);
console.log(taro.profile());

export {};
//アクセス修飾子public/private/protected

//参照を禁止する機能としてアクセス修飾子がある
//privateを付与すると、Personクラスのインスタンスからのみアクセス禁止になった。内部のメソッドからはアクセス可

class Person {
  //nameとageの型の定義をする
  //アクセス修飾子を使い、ageにはアクセスさせない。nameはアクセス可能
  public name: string;
  protected age: number;
  protected nationality: string;
  //protectedはprivateと同じくインスタンスからのアクセスはできなく、内部メソッドからは可能になり、さらに派生クラスからでもアクセスできる

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Person {
  //extendsでPersonクラスを継承
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
    //super()で初期化時に親クラスのconstructor()と同じ内容を利用できる（親クラスのconstructorメソッドが実行）
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person("Taro", 22, "Japan");
console.log(taro.profile()); //thisというオブジェクトを通してageにアクセスでできる
console.log(taro.name);
//console.log(taro.age); error
let hana = new Android("Hana", 22, "Japan");
console.log(hana.profile());
//console.log(hana.age); eeror

export {};

class Person {
  //Typescriptでは、nameとage (メンバ変数)の型の定義をする
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person("taro", 22);
console.log(taro); // Person { name: 'taro', age: 22 }

type PersonType = typeof Person;

//コンストラクター関数型の型からタプルまたは配列型を構築する
//ConstructorParametersはクラスの型に対して使用
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["yuuki", 22];
const hana = new Person(...profile);
console.log(hana); // Person { name: 'yuuki', age: 22 }

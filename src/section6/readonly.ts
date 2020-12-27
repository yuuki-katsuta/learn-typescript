export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "yuuki",
  age: 22,
};
me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;
//Readonly<Profile>でProfileのプロパティは読み取り専用となる

const friend: PersonalDataType = {
  name: "hana",
  age: 21,
};

//読み取り専用なのでerror friend.age++;

//Readonly<Profile>の内部処理
type Yomitori<T> = {
  readonly [p in keyof T]: T[p];
};

type YomitoriProfile = Yomitori<Profile>;

export {};
//Parameters<Type>は関数型のパラメーターで使用される型からタプル型を構築する

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("yuuki", 22);

type Profile = Parameters<typeof debugProfile>;
//Profileはタプル型となる。1番目にstring,2番目にnumberが定義される

const profile: Profile = ["hana", 23];

debugProfile(...profile);

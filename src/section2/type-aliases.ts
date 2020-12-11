export { };
//タイプエイリアス→別名をつける機能(typeの利用)

type Mojiretsu = string;
// stringという型に対して、Mojiretsuという別名を付けた

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello'

const example1 = {
  name: 'yuuki',
  age: 22
};

//exampl1の型推論を外に出して、それに名前をつけた
type Profile = {
  name: string;
  age: number;
}

const example2: Profile = {
  name: 'yuuki',
  age: 22
};

type Profile2 = typeof example1
//Profile2に対してexample1の型(データの型)を指定した
//この場合、nameとageしか使えない
//オブジェクトに対して、タイプエイリアスを使いアノテーションをした

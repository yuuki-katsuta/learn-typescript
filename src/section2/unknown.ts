export { };

const kansu = (): number => 43;
//(): numberで返す値の型を定義できる

let numberAny: any = kansu();
//any型は型が不定な変数を扱える
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown) //number

//numberUnknown + 10;を実行するにはif文を記述
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}

//let sumUnknown = numberUnknown + 10;
//unknown型を足し算することに警告（unknown型は数値ではないかもしれないため）

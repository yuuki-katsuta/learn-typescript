export { };

//enum型は数値、文字列を列挙するのに便利
//自動的に連番を付与させたいとき便利

//数値のenum型

//それぞれの要素に番号が振られている
enum Months {
  //デフォルトで先頭は0から始まるが、１を先頭にできる
  January = 1,
  February,
  March,
  April,
  may,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
};

console.log(Months.January)// 0
console.log(Months.February)// 1


//文字列のenum型
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  // YELLOW = '#FFFF00',
  BLACK = '#000000'
}

let green = COLORS.GREEN
console.log({ green }) //{ green: '#008000' }

//enum型に要素を足す
//使う直前でCOLORSに足す
enum COLORS{
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}
COLORS.YELLOW

export {};

//クラスのプロパティを読み取り専用なものにする=>readpnly修飾子

class VisaCard {
  constructor(public readonly owner: string) {}
  //初期化処理を省略する場合、publicのあとにreadonlyを記述
  //publicを省略しても良い
}

let myVisaCard = new VisaCard("yuukiさん");
console.log(myVisaCard.owner);

//myVisaCard.owner = "ベーコン";　読み取り専用なためエラー

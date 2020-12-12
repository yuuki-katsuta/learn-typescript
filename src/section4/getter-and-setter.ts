export {};
//参照専用のメソッドをゲッター

//*owner
// *所有者
// ＊初期化時に設定できる
// ＊途中で変更できない
// ＊参照できる =>アクセサーの機能であるget()を使う
//*secretNumber
// *個人番号
// ＊初期化時に設定できる
// ＊途中で変更できる => setterの利用
// ＊参照できない => private

class MyNumberCard {
  //getter/setterのメソッド名と重複するのでリネーム
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //ownerにアクセスした場合、メソッド実行される(つまり、参照専用のメソッド=>ゲッターという)
  get owner() {
    return this._owner;
  }

  //secretNumberに値を代入した場合、記述したメソッドが実行されます（セッターという）
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("カツカツ村", 9095);
//card.owner = "yuuki";
console.log(card.owner);

console.log(card.debugPrint());
card.secretNumber = 222222;
console.log(card.debugPrint());

console.log(card.secretNumber);

export {};

//複数のクラスを継承したい
//TypeScriptでは複数のinterfaceを継承することができる
//interfaceを使って、複数箇所に散らばった機能を取り入れた一つのクラスを作れる

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
  //処理の実態は記述しない
  //処理の実態がわからないようなメソッドの宣言をシグネチャという
}

interface Senshi {
  kougeki(): void;
}

//implementsは実装するということ
//このJiroクラスは　KenjaとSenshiというinterfaceを２つ実装している(これがinterfaceによる多重継承)
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();

export {};

//抽象メソッド→処理の実態がなく、必ずオーバーライドする必要があるメソッド
//多くのメソッドを継承して実装する場合,抽象メソッドとして定義して、そこから継承すると便利

//抽象クラス(インスタンス化はできない)
abstract class Animal {
  // メソッドの前にabstractで抽象メソッドになる
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}

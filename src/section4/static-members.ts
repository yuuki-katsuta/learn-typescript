export {};

//静的メソッドも静的プロパティもクラスのインスタンスからは呼び出されない。その代わりに、クラスそのものから呼び出される
//毎回newでインスタンス作成しなくてよい

class Me {
  //メンバ変数をハードコーティング
  static isProgrammer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  //静的プロパティ
  static work(): string {
    return `Hello world, ${this.firstName}`;
    //内部でメンバ変数を参照するときも、クラスからアクセスする
  }
}

//let me = new Me();
//console.log(me.isProgrammer);

//静的メンバ（インスタンス変数）にはクラスからアクセスする
console.log(Me.firstName);
console.log(Me.work());

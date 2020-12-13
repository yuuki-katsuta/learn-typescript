export {};
//名前空間とはその「空間」の中に、同じ名前のものが複数存在しないように仕分ける仕組みのこと

//名前の衝突が発生するので、namespaceで名前空間を作る
//namespaceで無制限に名前空間を作れる
namespace Japanese {
  export namespace Tokyo {
    //exportで外の空間からアクセスできるようになった
    export class Person {
      //アクセス修飾子で初期化処理を省略
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

//jaoanese配下のPersonクラスを参照
const name = new Japanese.Tokyo.Person("太郎");
console.log(name);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);

const meOsaka = new Japanese.Osaka.Person("ゆうき");
console.log(meOsaka);

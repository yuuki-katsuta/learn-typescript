export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

class Lion extends Animal {
  public speed: number;

  //Animalクラスを継承しているため、クラス変数が使用可能(this.name=>Simba)
  constructor(name: string, speed: number) {
    super(name);
    //superクラスは親クラスのコンストラクターメソッドそのもの
    //つまり、super()の引数である、メンバ変数nameの初期化は、Animalクラスのconstructor()で実行している

    //speedに関しては自分のクラスで初期化している
    this.speed = speed;
  }
  run(): string {
    //super()で親クラスのメソッドを実行できる
    // const parentMessage = super.run();
    // console.log({ parentMessage });
    return `${super.run()} ${this.speed}km/h`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("Mickey").run());
console.log(new Lion("Simba", 80).run());

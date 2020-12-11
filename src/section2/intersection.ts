export { };

//intersectionは既存の型をいかして新たな型を生成する方法

type Pitcher1 = {
  throwingSpeed: number;
};

type Battar1 = {
  battingAverage: number;
};

const yuuki: Pitcher1 = {
  throwingSpeed: 154
};

const hana: Battar1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }

//intersectionを使うことで、Pitcher1とBattar1の型をもつ新たな型を定義できる
type TwoWayPlayer = Pitcher1 & Battar1;

const maron: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
}

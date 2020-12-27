export {};

type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";

type Covid19InfectionInfo = {
  kanji_name: string;
  connfirmed_cases: number;
};

// Record<K, T>
//各都道府県に共通のデータ型をもたせたいとき,Recore型が便利
//第一引数にはunion型のデータをもたせ、それぞれの値にCovid19InfectionInfoの型を当てはめるということ

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", connfirmed_cases: 1960 },
  Chiba: { kanji_name: "千葉", connfirmed_cases: 196 },
  Tottori: { kanji_name: "鳥取", connfirmed_cases: 19 },
  Shiga: { kanji_name: "鳥取", connfirmed_cases: 19 },
};

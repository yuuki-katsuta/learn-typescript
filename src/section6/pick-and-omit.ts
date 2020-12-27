export {};

//必要な型だけを取り出して、あらたな型として作りたいときpickというユーティリティー型をつかう
type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;
//これでnameとweightだけを採用した型を生成した

//特定の型を排除して新しい型を生成するユーティリティー(omit)
type SmallProfile = Omit<DetailedProfile, "height">;

/**
 * type Pick<T, K extends keyof T> = {[P in K]: T[P];};
 * extendsは互換性があるかを調べる
 * keyof T でTのプロパティを文字列として受け取る
 *
 * つまり、Pick<DetailedProfile, "name" | "weight">;の場合
 * "name" | "weight" がTのプロパティと互換性があるかを調べている
 */

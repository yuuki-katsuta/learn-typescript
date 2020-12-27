export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//SomeTypeからある型を除外したいときexcludeをつかう

type FunctionType = Exclude<SomeTypes, string | number>;
//第一引数のsomeTypesは全体、第２引数にそこから除く型をunion型で記述
type NonFunctionType = Exclude<SomeTypes, DebugType>;

type TypeExcludingFunction = Exclude<SomeTypes, Function>;
//関数の型だけを除きたいときはExcludeにFunctionを渡してあげれば良い。Functionは関数の型の総称

//ある型を抽出したいときextractを使う
type FunctioTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctioTypeExtractingFunction = Extract<SomeTypes, Function>; //関数の型だけを抽出

// millやundefinedを除外したいときNonNullableを使う
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

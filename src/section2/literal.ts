export { };

//dayOfTheWeekには、曜日を表す文字列だけを入れたい
//dayOfTheWeek = '33';

//文字列のLiteral型

let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
//これでdayOfTheWeekには日〜土までの文字列だけを許容する
dayOfTheWeek = '月';

//error: dayOfTheWeek = '33';


//数値のリテラル型(1~12までの数値だけ許容)
let month: | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
//error: month = 13;


let TRUE: true = true;

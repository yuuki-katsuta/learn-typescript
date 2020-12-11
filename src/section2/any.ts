import axios from 'axios'
export { };
//any型は型が不定な変数を扱える
//anyは極力使わない

let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(function (response) {
  //getの引数にurlを指定するとhttpのgetメソッドが使える
  //let data: any = response.data
  //dataには様々なデータが存在しているので、型推論できない（つまりany型である）

  //配列の中のオブジェクトの中身をinterface を使い定義する
  //新たにArticleというオブジェクトを作り、それをdataの型に指定する
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  let data: Article[];
  data = response.data
  console.log(data);
})

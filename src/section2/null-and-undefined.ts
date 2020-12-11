export { };
//null型ではnull, undefined型ではundefined以外持たせないとき、明示的にアノテーションする

let absence: null = null;
// absence = null では型推論でnull型にならない
// absence = 'hello'

let data: undefined = undefined;
//data = 'hello'

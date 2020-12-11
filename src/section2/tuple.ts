export { };
//タプル型はすべての要素に対して型を指定する

let profile: [string, number] = ['ham', 22];

//let profile: (string | number)[]のような書き方だと順序性が守られていない
// profile = [22, 'ham']　これもOKになる（成約がゆるい）

//profile = [22, 'ham']

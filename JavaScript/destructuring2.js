const [a] = [10]
console.log(a);

const [b1, ,b3, ,b5,b6 = 9] = [10,6,8,34]

console.log(b1,b3,b5,b6);

const [, [,valor]] = [[,7,6],[2,7,9]]
console.log(valor);
const anosCopa = [1994, 2002, 2010, 2018];

let copaMundo = anosCopa.map(function(e){
    return e + 4
});

console.log(anosCopa);
console.log(copaMundo);



const olimpiadas = e => e + 2

const copaConf = e => e - 1

copaMundo = anosCopa.map(olimpiadas)

console.log(copaMundo);

copaMundo = anosCopa.map(copaConf)
console.log(copaMundo);
const resultado = nota => ((nota <=10 && nota >= 8) 
? 'Aprovado' : 'Reprovado');


console.log(resultado(8));
console.log(resultado(4.5));
console.log(resultado(9.9));
console.log(resultado(7.9));
// ///QUESTÃO 1

// const alunosNomes = [];
// const alunosNotas = [];

// for (i = 0; i <= 4; i++) {
//   var entrada = String(prompt("Escreva nomes dos alunos!"));
//   alunosNomes.push(entrada);

//   var entrada = Number(prompt("Escreva notas dos alunos!!"));
//   alunosNotas.push(entrada);

//   i++;
// }

// const tamanhoNotas = alunosNotas.length

// const SomaNotas = alunosNotas.reduce(function(total,numero){
//     return total + numero
// })

// alert(`Foram digitados ${tamanhoNotas} nomes e notas!`)
// alert(`Os nomes digitados foram: ${alunosNomes}`)
// alert(`As notas digitadas foram: ${alunosNotas}`)
// alert(`A média das notas digitadas é: ${SomaNotas / tamanhoNotas}`)

// //QUESTÃO 2

// const ArrayA = []
// const ArrayM = []

// for (var i = 0; i < 10; i++) {

//   if (i == 9) {
//     var entrada = Number(prompt("Digite último número!"));
//     x = entrada
//   } 

//   else {
//     var entrada = Number(prompt("Digite um número"));
//     ArrayA.push(entrada);
    
//   }
// }

// const multiplicar = e => e * x

// arrayM = ArrayA.map(multiplicar)

// alert(`Os dez número digitados foram ${ArrayA}`);
// alert(`O último número X digitado foi: ${x}`);
// alert(`Cada número digitado multiplicado pelo X é: ${arrayM}`);

// //QUESTÃO 3

// const ValoresTemperaturas = [];
// var dia = 1

// for (i = 0; i < 7; i++) {

//     var entrada = Number(prompt(`Escreva a temperatura do dia: ${dia}`));
//     ValoresTemperaturas.push(entrada);
//     dia += 1
// }

// const somaTemperatura = ValoresTemperaturas.reduce(function(total,numero){
//     return total + numero
// })

// const maiorTemperatura = ValoresTemperaturas.reduce(function(a,b){
//     return Math.max(a,b)
// })

// const menorTemperatura = ValoresTemperaturas.reduce(function(a,b){
//     return Math.min(a,b)
// })
// const numeroDias = ValoresTemperaturas.length

// alert(`A temperatura média de todos os dias é: ${(somaTemperatura /  numeroDias).toFixed(2)}`);

// alert(`A maior temperatura é: ${maiorTemperatura}`);

// alert(`A menor temperatura é: ${menorTemperatura}`);

// //QUESTÃO 5

// var entrada1 = "";
// var entrada2 = 0;
// const nomes = [];
// const idades = [];
// var laco = true;

// while ((laco = true)) {

//   if (entrada1 == "Fim" || entrada1 == "FIM" || entrada1 == "fim") {
//     laco = false;
//     break;
//   }

//   else {
//     entrada1 = String(prompt("Escreva seu nome"));
//     if (entrada1 == "Fim") {
//       laco = false;
//       break
//     } else {
//       nomes.push(entrada1);
//       entrada2 = Number(prompt("Escreva sua idade"));
//       idades.push(entrada2);
//     }
//   }
// }

// const CalcularfilaPreferencial = e => e >= 60
// const CalularfilaNormal = e => e <= 59

// const Preferencial = idades.filter(CalcularfilaPreferencial)
// const Normal = idades.filter(CalularfilaNormal)

// console.log(`Idades que vão para fila Preferencial: ${Preferencial}`);
// console.log(`Idades que vão para fila Normal ${Normal}`);

// //QUESTÃO 6

// const saqueValidos = [];
// const saquesInvalidos = [];

// while (entrada != 0) {
//   var entrada = Number(prompt("Qual valor deseja sacar?"));

//   if (entrada == 0) {
//     Resultado();
//     break;
//   } else {
//     if (
//       entrada % 10 == 0 &&
//       entrada % 5 == 0 &&
//       entrada % 2 == 0 &&
//       entrada != 0
//     ) {
//       saqueValidos.push(entrada);
//       alert("Saque Válido!");
//     } else {
//       saquesInvalidos.push(entrada);
//       alert("Saque Inválido!");
//     }
//   }
// }

// function Resultado() {
//   const nInvalidos = saqueValidos.length;

//   const totalSaqueValidos = saqueValidos.reduce(function (total, numero) {
//     return total + numero;
//   });

//   alert(
//     `Seus saques válidos foram ${saqueValidos}\nDando o total de R$ ${totalSaqueValidos}\nForam ${nInvalidos} saques inválidos `
//   );

// }

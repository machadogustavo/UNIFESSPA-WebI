// //QUESTÃO 1
// const produto = Number(prompt("Qual o valor do produto?"));
// const produtoDesconto = produto * 0.15;
// const produtoNovo = produto - produtoDesconto;
// const resultado = function(produtoNovo) {
//     if (produtoNovo > 500) {
//         alert(`CARO, VALOR PRODUTO: R$ ${produtoNovo}`);
//       } 
//     else if (produtoNovo < 500) {
//         alert(`BARATO, VALOR PRODUTO: R$ ${produtoNovo}`);
//       }
//     else {
//         alert("ENTRADA INVÁLIDA!");
//       }
// }
// resultado(produtoNovo)

// //QUESTÃO 2
// let valorInvestimentoRenda = 0
// const tipoInvestimento = prompt('Qual o tipo de investimento?')
// let valorInvestimento = Number(prompt('Qual o valor a ser investido?'))


// const calculoInvestimento = function(tipoInvestimento,valorInvestimento){
//     if(tipoInvestimento == 'poupanca' || tipoInvestimento == 'poupança' || tipoInvestimento == 'Poupança'){
//         valorInvestimentoRenda = valorInvestimento + (valorInvestimento * 0.05)
//         alert(`O seu investimento do tipo ${tipoInvestimento}, rendeu o total de ${valorInvestimentoRenda}`)
//     }

//     else if(tipoInvestimento == 'Fundo de renda fixa' || tipoInvestimento == 'fundo de renda fixa' || tipoInvestimento == 'FUNDO DE RENDA FIXA'){
//         valorInvestimentoRenda = valorInvestimento + (valorInvestimento * 0.10)
//         alert(`O seu investimento do tipo ${tipoInvestimento}, rendeu o total de ${valorInvestimentoRenda}`)
//     }

//     else {
//         alert(`Entrada inválida!`)
//     }
// }

// calculoInvestimento(tipoInvestimento,valorInvestimento)

// //QUESTÃO 3

// let altura = Number(prompt('Qual a sua altura? "Utilize Pontos!!"'))
// let sexo = prompt('Qual o seu sexo? M ou F?')
// let pesoIdeal = null

// const calcularPeso = function(altura,sexo) {
//     if(sexo == 'M' || sexo == 'm'){
//         pesoIdeal = ((72 * altura) - 58).toFixed(2)
//         alert(`Seu Peso Ideal Masculino é: ${pesoIdeal}`)
//     }

//     else if(sexo == 'F' || sexo == 'f'){
//         pesoIdeal = ((62 * altura) - 44).toFixed(2)
//         alert(`Seu Peso Ideal Feminino é: ${pesoIdeal}`)
//     }
// }
// calcularPeso(altura,sexo)

// //QUESTÃO 4

// let valorProduto = Number(prompt('Qual o valor do seu produto para aplicarmos a promoção??'));
// let produtoDesconto = null

// const calcularDesconto = function(valorProduto){
//     if(valorProduto < 200){
//         produtoDesconto = valorProduto - (valorProduto * 0.01)
//         alert(`Você ganhou 10% de desconto,seu produto ficou no valor de R$ ${produtoDesconto.toFixed(2)}`)
//     }

//     else if(valorProduto > 200 && valorProduto <= 500){
//         produtoDesconto = valorProduto - (valorProduto * 0.15)
//         alert(`Você ganhou 15% de desconto,seu produto ficou no valor de R$ ${produtoDesconto.toFixed(2)}`)
//     }

//     else if(valorProduto > 500){
//         produtoDesconto = valorProduto - (valorProduto * 0.20)
//         alert(`Você ganhou 20% de desconto,seu produto ficou no valor de R$ ${produtoDesconto.toFixed(2)}`)
//     }

//     else {
//         alert(`Valor inválido!`)
//     }
// }

// calcularDesconto(valorProduto)

//QUESTÃO 5



// //QUESTÃO  6

// let numeroPessoas = Number(prompt('Quantas pessoa vão entrar?'))
// let numeroPeixes = Number(prompt('Quantos peixes vocês pegaram?'))
// const entrada = 20
// const peixeExtra = 12
// let ValorFinal = 0

// const CalcularValorFinal = function(numeroPessoas,numeroPeixes,ValorFinal){
//     ValorFinal = (numeroPessoas * entrada) + (numeroPeixes * peixeExtra)
//     alert(`O valor a pagar é ${ValorFinal}, foram ${numeroPessoas} entrada e ${numeroPeixes} peixes extras`)
// }

// CalcularValorFinal(numeroPessoas,numeroPeixes,ValorFinal)



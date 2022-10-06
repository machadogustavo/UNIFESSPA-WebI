// //QUESTÃO 1
// var intervaloDentro = 0
// var intervaloFora = 0
    
// function entrada(numero,entradaDados){

//     let i = 0

//     while(i < 5) {
//         i++
//         var numero = Number(prompt("Digite um valor"));

//         if(numero >= 10 && numero <=20){
//             intervaloDentro = (intervaloDentro + 1)
//         }

//         else{
//             intervaloFora = (intervaloFora + 1)
//         }
//     }

//     alert(`${intervaloDentro} números estão dentro do intervalo entre 10 e 20 e ${intervaloFora} números estão fora deste intervalo!`);

// }

// entrada()

//QUESTÃO 2 

// var  s = 's'
// var n = 0

// while (s == 's') {
//     n += Number(prompt('Informe o valor do prouto: '))
//     alert('Valor atual:' + n)
//     s = String(prompt('Tem outro produto? (s ou n)'))
// }

// alert('Sua compra deu: R$ ' + n + ' reais.')



//QUESTÃO 3

// const total = Number(prompt('Digite o total da compra!'))
// var parcelaTotal = 0
// var numeroParcelas = 6

// function calcularParcela(total){

//     parcelaTotal = (total / 6).toFixed(2)


//     if(total <= 20){
//         numeroParcelas = 1
//         parcelaTotal = total / numeroParcelas
//         alert(`VALOR TOTAL: ${total}\nMÁXIMO DE PARCELAS: ${numeroParcelas}\nVALOR CADA PARCELA: ${parcelaTotal}`)
//     }

//     else {
//         alert(`VALOR TOTAL: ${total}\nMÁXIMO DE PARCELAS: ${numeroParcelas}\nVALOR CADA PARCELA: ${parcelaTotal}`)
//     }

// }

// calcularParcela()


//QUESTÃO 4

// function copaOcorre(ano){

//     var ano = null

//     while(ano != 0){
//         ano = Number(prompt('Digite um ano!'))

//         if(ano >= 1930 && ano != 1942 && ano != 1946 && ano % 2 == 0){
//             alert('Ano de copa do mundo!!');
//         }

//         else if(ano == 1942 || ano == 1946){
//             alert('Ano de guerra :C');
//         }

//         else if(ano < 1930){
//             alert('Nem existia a copa!')
//         }

//         else if(ano > 1930 && ano % 2 != 0){
//             alert('Não é ano de copa!')
//         }

//         else{
//             alert('Entrada Inválida')
        
//         }
//     }
// }

// copaOcorre()









//QUESTÃO 5


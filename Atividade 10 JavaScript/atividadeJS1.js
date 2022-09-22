//gustavo paixão machado 202040602016

//QUESTÃO 1
const jantar = Number(prompt("Valor do jantar R$"));
const garcom = jantar * 0.1;
const total = jantar + garcom;
alert(`
Taxa de Garçom R$: ${garcom.toFixed(2)}\n
Total a ser pago R$: ${total.toFixed(2)}
`);

//QUESTÃO 2
const viagemDias = Number(prompt('Quantos dias durou a viagem?'));
const viagemHoras = Number(prompt('Quantas horas durou a viagem?'));
const diashoraTotal = (viagemDias * 24);
const duracaoTotal = viagemHoras + diashoraTotal;
alert(`
A duração da sua viagem foi de ${duracaoTotal} horas!
`) 

//QUESTÃO 3 
const contaTotal = Number(prompt('Qual o valor total da conta?'));
const dividirConta = Number(prompt('Vai dividir a conta para quantas pessoas?'));
const contaDividida = contaTotal / dividirConta;
alert(`A conta dividida deu ${contaDividida.toFixed(2)} por pessoa!`)


//QUESTÃO 4
const precoProduto = Number(prompt('Qual o preço do produto?'));
const precoDesconto = precoProduto * 0.1
const precoPDesconto = (precoProduto - precoDesconto)
const precoDividido = precoProduto / 3
alert(`O produto pago a vista tem o desconto de R$ ${precoDesconto.toFixed(2)} e fica no valor total de ${precoPDesconto}, já parcelado em três vezes fica ${precoDividido.toFixed(2)} por parcela!`);

//QUESTÃO 5
const pagamentoFixo = 1200;
const vendasTotal = Number(prompt('Qual o valor total de vendas?'));
const comissaoVendas = vendasTotal * 0.15;
const salarioTotal = comissaoVendas + pagamentoFixo;
alert(`O seu total de vendas é: ${vendasTotal.toFixed(2)}\nA sua comissão de 15% dessas vendas é: ${comissaoVendas.toFixed(2)}, sendo assim seu salário total é: ${salarioTotal.toFixed(2)}`)

//QUESTÃO 6
const totalEleitores = Number(prompt('Qual o total de eleitores?'));
const votosBrancos = Number(prompt('Qual o total de votos em brancos?'));
const votosNulos = Number(prompt('Qual o total de votos nulos?'));
const votosValidos = Number(prompt('Qual o total de votos válidos?'));

const porcetagemBrancos = (votosBrancos / totalEleitores) * 100;
const porcetagemNulos = (votosNulos / totalEleitores) * 100;
const porcetagemValidos = (votosValidos / totalEleitores) * 100;
alert(`
A porcetagem de votos em brancos é de ${porcetagemBrancos}%\n
A porcetagem de votos em nulos é de ${porcetagemNulos}%\n
A porcetagem de votos válidos é de ${porcetagemValidos}%
`)
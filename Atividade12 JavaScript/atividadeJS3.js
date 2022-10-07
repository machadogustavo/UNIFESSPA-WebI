


QUESTÃO 3

const total = Number(prompt('Digite o total da compra!'))
var parcelaTotal = 0
var numeroParcelas = 6

function calcularParcela(total){

    parcelaTotal = (total / 6).toFixed(2)


    if(total <= 20){
        numeroParcelas = 1
        parcelaTotal = total / numeroParcelas
        alert(`VALOR TOTAL: ${total}\nMÁXIMO DE PARCELAS: ${numeroParcelas}\nVALOR CADA PARCELA: ${parcelaTotal}`)
    }

    else {
        alert(`VALOR TOTAL: ${total}\nMÁXIMO DE PARCELAS: ${numeroParcelas}\nVALOR CADA PARCELA: ${parcelaTotal}`)
    }

}

calcularParcela()


QUESTÃO 4

function copaOcorre(ano){

    var ano = null

    while(ano != 0){
        ano = Number(prompt('Digite um ano!'))

        if(ano >= 1930 && ano != 1942 && ano != 1946 && ano % 2 == 0){
            alert('Ano de copa do mundo!!');
        }

        else if(ano == 1942 || ano == 1946){
            alert('Ano de guerra :C');
        }

        else if(ano < 1930){
            alert('Nem existia a copa!')
        }

        else if(ano > 1930 && ano % 2 != 0){
            alert('Não é ano de copa!')
        }

        else{
            alert('Entrada Inválida')
        
        }
    }
}

copaOcorre()



//QUESTÃO 6

function numeroPerfeito(numero)
{
    numero= Number(prompt('Digite um número!'))
    soma = 1;
    
    for (let i=2; i*i<=numero; i++)
    {
        if (numero%i==0)
        {
            if(i*i!=numero)
                soma = soma + i + numero/i;
            else
                soma=soma+i;
        }
    }
    if (soma == numero && numero != 1)
        return alert(`O número ${numero} é perfeito`);
 
    return alert('O número digitado não é perfeito!');
}
 
numeroPerfeito()



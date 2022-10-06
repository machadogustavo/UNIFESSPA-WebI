

const produto = {
    codigo: 145,
    nome: 'Café',
    linha: 'Grão Nosso',
    peso: 200,
    fabricante: {
        cnpj: 234876,
        nome: 'Maratá'
    },
    dataValidade: '22-10-22',
    valorUnidade: 7
}


// const {nome, peso} = produto
// console.log(nome,peso);


// const {nome: n, peso: p} = produto
// console.log(n,p);

// const {validade, lote = 34} = produto
// console.log(validade , lote);

// console.log(produto);

const {fabricante: {nome: nf,cnpj: cf}} = produto
console.log(nf, cf);




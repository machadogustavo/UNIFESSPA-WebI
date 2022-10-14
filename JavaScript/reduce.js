

const roupas = [
    {marca: 'Adidas', tipo: 'Camisa', preco: 40, tamanho: 'M', cor: 'Preta'},
    {marca: 'Olympikus', tipo: 'Camisa', preco: 40, tamanho: 'M', cor: 'Branca'},
    {marca: 'Nike', tipo: 'Blusa', preco: 60, tamanho: 'M', cor: 'Amarela'},
    {marca: 'Puma', tipo: 'Short', preco: 20, tamanho: 'P', cor: 'Verde'},
    {marca: 'Fila', tipo: 'Calça', preco: 70, tamanho: 'G', cor: 'Preta'}
]

console.log(roupas.map(a => a.preco));


const resultado = roupas.map(a => a.preco).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})

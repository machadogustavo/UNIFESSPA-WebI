

const carros = [
    {modelo: 'Uno', marca: 'Fiat', preco: 38000, cor: 'Vermelho',},
    {modelo: 'Gol', marca: 'Volks',preco: 60000, cor: 'Branca',},
    {modelo: 'Fusca', marca: 'Volks',preco: 38000, cor: 'Preto', },
    {modelo: 'Galardo', marca: 'Mercedes',preco: 70000, cor: 'Amarelo'}
]



const carrosPrecoAcima = carro => carro.preco >= 20000  

const carrosCor = carro => carro.cor == 'Branca'

console.log(carros.filter(carrosPrecoAcima).filter(carrosCor));

// console.log(carros.filter(carrosPrecoAcima));

// console.log(carros.filter(carrosCor));

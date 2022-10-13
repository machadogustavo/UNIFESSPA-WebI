const libertadores2023 = 
['Palmeiras', 'Flamengo', 'Internacional', 'Corinthians', 'Fluminense' ]

libertadores2023.pop() //Remove o último elemento da lista

console.log(libertadores2023);

libertadores2023.push('Flamengo') //Adicionar elemento na lista
console.log(libertadores2023);

libertadores2023.shift() //Remove o primeiro elemento da lista
console.log(libertadores2023);

libertadores2023.unshift('Palmeiras') //Adiciona elemento no primeiro índice da lista
console.log(libertadores2023);

// libertadores2023.splice(1 ,0,'Águia') //Adicionar ou Remover vários elementos na lista
// console.log(libertadores2023);

// libertadores2023.splice(1,2) //Eliminando dois elementos a partir do índice [1]
// console.log(libertadores2023);

// libertadores2023.slice(2, 2) //Divide/Fatia a lista criando assim outra lista
// console.log(libertadores2023);

const novaLibertadores2023 = libertadores2023.slice(2)
console.log(novaLibertadores2023);

const novaTwoLibertadores2023 = libertadores2023.slice(1,4) //Vai fatiar a lista a partir do índice [1] até o [3]
console.log(novaTwoLibertadores2023);

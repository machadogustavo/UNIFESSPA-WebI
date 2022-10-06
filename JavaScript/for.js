// for(let i = 1; i<= 10; i++){

//     console.log(`contador = ${i}`);

// }

const notas = [5.6,7.8,8.3,9.3,2.6]
// for (let i = 0; i<notas.length; i++){
    
//     console.log(`nota = ${notas[i]}`);

// }


// for(let i in notas){

//     console.log(i, notas[i]);

// }

const funcionario = {
    nome: 'Joao',
    cargo: 'Gerente',
    salario: 3000,
    matricula: 69456
}

for(let atributo in funcionario){
    console.log(`${atributo} = ${funcionario[atributo]}`);
}


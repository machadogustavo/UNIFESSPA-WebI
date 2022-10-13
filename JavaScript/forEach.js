const cursos = 
['Química', 'Sistemas', 'Jornalismo','Psicologia', 'Direito', 'Economia', 'Matemática']

cursos.forEach(function(nome, indice){
    console.log(`${indice +1} ${nome}`);
}) //Executa uma dada função dentro de um elemento de um array

cursos.forEach(nome => console.log(`${nome}`))
function desafioWEBI (trabalho1,trabalho2) {
    const ganharSDD = trabalho1 || trabalho2
    const ganharNotebook = trabalho1 && trabalho2   
    const ganharCamisaFACSI = trabalho1 != trabalho2
    const receberPuxaoOrelha = !ganharSDD

    return {ganharSDD,ganharNotebook,ganharCamisaFACSI,receberPuxaoOrelha}
}

console.log(desafioWEBI(true,true));
console.log(desafioWEBI(false,true));
console.log(desafioWEBI(true,false));
console.log(desafioWEBI(false,false));

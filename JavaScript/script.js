//QUESTÃO 1

class Pessoa {
  constructor() {
    this.nome = "";
    this.rg = "";
    this.cpf = "";
    this.telefone = "";
  }

  falar() {
    alert(
      `Olá ${this.nome} com o rg: ${this.rg}, cpf: ${this.cpf} e telefone: ${this.telefone}`
    );
  }

  andar() {
    alert(`Aloooooooou`);
  }
}

let x = new Pessoa();
let y = new Pessoa();

x.nome = 'Joao'
x.rg = '001'
x.cpf = '123'
x.telefone = '999'
y.nome = 'André'

x.falar()
x.andar()

y.falar()
y.andar()


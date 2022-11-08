// Object.prototype.attr0 = '0'

// const avo = {attr1: 'A'}
// const pai = {__proto__:avo,attr2: 'B',attr3: '3'}
// const filho = {__proto__:pai, attr3: 'C'}

// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){

        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else{
            this.velAtual = this.velMax
        }
    },

    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: 'F50',
    velMax: 350

}

const uno = {
    modelo: 'ComEscada',
    status(){
        return `${this.modelo} : ${super.status()} .`

    }
}

Object.setPrototypeOf(ferrari,carro)

Object.setPrototypeOf(uno,carro)



// console.log(ferrari);
// console.log(uno);

uno.acelerar(100)

console.log(uno.status());

ferrari.acelerar(300)

console.log(ferrari.status());
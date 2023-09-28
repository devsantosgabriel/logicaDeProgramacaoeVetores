const prompt = require('prompt-sync')();

let contador = 1;    

while(contador <= 5) {
    let numero = Number(prompt('Digite um número: '));
    let resultado = numero * 3;
    console.log(resultado);
    contador = contador + 1;
};


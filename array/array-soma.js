const prompt = require('prompt-sync')();

let array_numeros = new Array(5); let soma = 0;

for(let cont = 0; cont < array_numeros.length; cont++){
    let numeros = Number(prompt('Digite um número: '));
    array_numeros[cont] = numeros;
    soma += array_numeros[cont];
}

console.log(`Soma dos elementos do array: ${soma} `);





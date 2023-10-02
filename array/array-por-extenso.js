const prompt = require('prompt-sync')();

let array_caracteres = new Array(5); let i = 0; let extenso = " ";

for(let cont = 0; cont < array_caracteres.length; cont++){
        i++;
    array_caracteres[cont] = prompt(`Digite a ${i} letra de um número que contenha 5 letras: `);
    extenso += array_caracteres[cont];
};

console.log(array_caracteres);
console.log(extenso);
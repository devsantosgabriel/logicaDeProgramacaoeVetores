const prompt = require('prompt-sync')();

let array_nomes = new Array(5);

for(let contador = 0; contador < array_nomes.length; contador++){
    let nome = prompt('Digite um nome: ');
    array_nomes[contador] = nome;
};

console.log(array_nomes);

console.log(array_nomes.reverse());
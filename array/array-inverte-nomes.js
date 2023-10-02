const prompt = require('prompt-sync')();

let array_nomes = new Array(5); let array_invertido = new Array(5);

for(let i = 0; i < array_nomes.length; i++){
    let nomes = prompt('Digite um nome: ');
    array_nomes[i] = nomes;
    for(let j = 0; j < array_nomes.length; j ++){
       array_invertido[j] = array_nomes[array_nomes.length-1-j];
    };
};
console.log(array_nomes);

for(let cont = 0; cont < array_invertido.length; cont++){
    console.log('Elemento do array na posição '+ cont + " é: " + array_invertido[cont] +" \n ");
}


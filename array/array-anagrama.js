const prompt = require('prompt-sync')();

let array_palavra = new Array(5); let array_anagrama = new Array(5); let cont = 0;let i;

for(i = 0; i < array_palavra.length; i++){
        cont++;
        let letra = prompt(`Digite a ${cont} letra de uma palavra que contenha 5 letras: `)
        array_palavra[i] = letra;
        for(let j = 0; j < array_palavra.length; j ++){
            array_anagrama[j] = array_palavra[array_palavra.length-1-j];
         };
};

for(let k = array_anagrama.length; k >=0; k --){
    if(array_palavra[i] === array_anagrama[k]){
        console.log('Os vetores são anagramas');
    };   
};

console.log(array_palavra);
console.log(array_anagrama);
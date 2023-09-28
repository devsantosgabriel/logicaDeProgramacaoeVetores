const prompt = require('prompt-sync')();

let idade; let altura; let media; let contador = 1; let quantidade_idade= 0; let soma_altura =0;

while(contador <= 4){

    idade = Number(prompt('Digite a sua idade: '));

    altura = Number(prompt('Digite a sua altura: '));

    contador++;

    if(idade > 50){
        quantidade_idade++;    
    };

    if(idade > 50){
        soma_altura += altura; 
    };

    media = soma_altura/quantidade_idade;
};

console.log(media)
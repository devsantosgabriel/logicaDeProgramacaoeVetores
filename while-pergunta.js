const prompt = require('prompt-sync')();

let resposta = "Sim";

while(resposta === "S" || resposta === "Sim"){
    let numero = Number(prompt('Digite um número: '));
    let resultado = numero * 3;
    console.log(resultado);
    resposta = prompt("Deseja continuar ? ");
}
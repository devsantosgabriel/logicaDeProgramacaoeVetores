const prompt = require('prompt-sync')();

let contador = true; let adicao; let subtracao; let multiplicacao; let divisao; let num1; let num2; let opcao;

while (contador) {
    console.log('Menu de opções: ');
    console.log('1- Adição ');
    console.log('2- Subtração ');
    console.log('3- Multiplicação');
    console.log('4- Divisão ');
    console.log('5- Sair');

    opcao = Number(prompt('Escolha uma opção: '));

    if (opcao === 5) {
        contador = false;
        console.log('Programa encerrado');
    } else if (opcao >= 1 && opcao <= 4) {
        num1 = Number(prompt('Informe o primeiro número: '));
        num2 = Number(prompt('Informe o segundo número: '));
        if (opcao === 1) {
            adicao = num1 + num2;
            console.log(`O resultado da adição entre ${num1} e ${num2} é ${adicao}`);
        } else if (opcao === 2) {
            subtracao = num1 - num2;
            console.log(`O resultado da subtração entre ${num1} e ${num2} é ${subtracao}`);
        } else if (opcao === 3) {
            multiplicacao = num1 * num2;
            console.log(`O resultado da multiplicação entre ${num1} e ${num2} é ${multiplicacao}`);
        } else if (opcao === 4) {
            divisao = num1 / num2;
            console.log(`O resultado da divisão entre ${num1} e ${num2} é ${divisao}`);
        } else {
            console.log('Opção Inválida');
        };
    };
};



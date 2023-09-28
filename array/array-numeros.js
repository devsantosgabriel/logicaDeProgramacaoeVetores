let lista_numeros = [1, 12, 34, -8, -16, 0];

let soma_positivos = 0; let soma_negativos = 0; let soma_total = 0;

for (let contador = 0; contador < lista_numeros.length; contador++) {

    if (lista_numeros[contador] > 0) {

        soma_positivos += lista_numeros[contador];

    } else {

        soma_negativos += lista_numeros[contador];
        
    };
};

soma_total = soma_positivos + soma_negativos;

console.log(soma_positivos);
console.log(soma_negativos);
console.log(soma_total);
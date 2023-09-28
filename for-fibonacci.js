const prompt = require('prompt-sync')();

let anterior = 0; let posterior = 1; let fibonacci = 1;

for(let contador = 0; contador < 15; contador++){
    fibonacci = anterior + posterior;

    anterior = posterior;

    posterior = fibonacci;

    console.log(fibonacci);
};


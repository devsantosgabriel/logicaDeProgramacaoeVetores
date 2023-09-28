//criando um array com declaração de tamanho
let array_com_elementos = new Array(5);
//imprime 5
console.log(array_com_elementos.length);
//adiciona elemento no final do array, contudo adiciona também um novo index
array_com_elementos.push(2);
//imprime 6 porque o push adicionou um elemento e novo index
console.log(array_com_elementos.length);
//adicionamos no index 0 o elemento 15
array_com_elementos[0] = 15
//imprime 6 porque não foi adicionado nenhum novo index
console.log(array_com_elementos.length);
//imprime 2 porque o 2 está na 6ª posição, no index 5
console.log(array_com_elementos[5]);
//adiciona elemento no inicio do array, contudo adiciona também um novo index
array_com_elementos.unshift(13);
//imprime 7 porque o unshift adicinou novo elemento e novo index
console.log(array_com_elementos.length);
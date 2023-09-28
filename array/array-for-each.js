//criando array de dados númericos e a variável soma iniciando com zero
let array_dados = [1,2,3,4,5]; let soma = 0;

/*iterando o array_dados utilizando forEach
e passando como parâmetro da função retornada pelo forEach os valores do array_dados*/
array_dados.forEach(function(valor){
    soma += valor;
}); 

console.log(soma);

/*iterando o array_dados utilizando forEach
e passando como parâmetro da função retornada pelo forEach os valores, o index e o array_dados*/
array_dados.forEach(function(valor, index, array){
    array[index] = valor+1;
});

console.log(array_dados);

/*os argumentos da função do forEach depende do seu objetivo
tanto faz passar 1 argumento quanto 3 argumentos, o importante é saber
que cada instrução passada na função será aplicada em cada item do array*/
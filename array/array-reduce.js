let array_dados = [1,2,3,4,5];  

let soma = array_dados.reduce(function(acumulador, valor_atual){

    return acumulador + valor_atual;

}, 0);

console.log(soma);



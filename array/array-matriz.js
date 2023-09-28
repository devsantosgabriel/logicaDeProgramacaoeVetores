//criando um array e declarando o tamanho 10
let array_multidimensional = new Array (10);

//iterando o array com for e adicionando em cada linha um array, ao final teremos linhas e colunas
for(let contador = 0; contador < array_multidimensional.length; contador++){
    array_multidimensional[contador]=new Array(10);
};

//preenchendo o array com a multiplicação das coordenadas das linhas e colunas
for(let linha = 0; linha < array_multidimensional.length; linha++ ){
    for(let coluna = 0; coluna < array_multidimensional[linha].length; coluna++){
        array_multidimensional[linha][coluna] = linha*coluna;
    };
};

console.log(array_multidimensional[1][3]);
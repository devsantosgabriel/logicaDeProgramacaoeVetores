//método join() cria uma string com elementos do array e recebe por parâmetro os separadores dessa string
let array_join = ['c','i', 'n','c','o'];

console.log(array_join.join(" "));

//método concat() cria um novo array com elementos concatenados, ou seja, insere novos elementos em um array já existente
let array_concat = [1,2,3];

let array_concatenado = array_concat.concat(4,5,6);

console.log(array_concatenado);
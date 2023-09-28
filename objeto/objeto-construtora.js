//criando modelo de objeto a partir da função construtora
const objeto_construtora = function(nome,idade){
    this.nome = nome,
    this.idade = idade
};

//instanciando um objeto da função construtora objeto_construtora
let objeto_usuario = new objeto_construtora('Rafael', 1);


//imprimindo as propriedades e valores do objeto_usuario
console.log(objeto_usuario);
//criando objeto literal
const objeto_literal = {
    nome: 'Gabriel',
    idade: 29,
    Estudar: function(){
        console.log('Estudando');
    },
    objeto_novo:{
        nome: 'Sérgio',
        idade: 24
    }
};

//exibindo o valor da propriedade nome
console.log(objeto_literal.nome)

//atribuindo nova propriedade ao objeto_literal
objeto_literal.signo = 'Gêmeos'

//exibindo objeto literal
console.log(objeto_literal);

console.log(objeto_literal.objeto_novo);


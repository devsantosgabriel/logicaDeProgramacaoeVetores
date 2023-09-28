//criando objeto literal
const objeto_literal = {
    nome: 'Gabriel',
    idade: 29,
    Estudar: function(){
        console.log('Estudando');
    }
};

//iterar com for/in
for(let propriedade in objeto_literal){
    console.log(propriedade);
}
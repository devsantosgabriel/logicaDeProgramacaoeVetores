let contador = 0;

while(contador <= 20){
    contador = contador + 1;
    let resto = contador % 2;

    if(resto === 0){
        console.log(contador);
    }else{
        continue
    }
}
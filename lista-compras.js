let listaCompras=['arroz','feijão','macarrão','óleo','sabonete'];

//Join
function comprasJoin(listaCompras){

   let separadosPorTraco= listaCompras.join('-');
   console.log(separadosPorTraco);
   console.log('O metódo Join separa os elementos de array que especificamos, no meu caso foi utilizado o traço.');
}
comprasJoin(listaCompras);

//Pop
function comprasPop(listaCompras){
    let ultimaCompra = listaCompras.pop();
    console.log(listaCompras);
    console.log(ultimaCompra);
    console.log('O método Pop eliminou o último elemento da minha lista de compras: sabonete.');
}
comprasPop(listaCompras);

//Push
function comprasPush(listaCompras){
    listaCompras.push("sabão em pó");
    console.log(listaCompras);
    console.log('O´método Push adicionou mais um item na minha compra no final do array: sabão em pó.');
}
comprasPush(listaCompras);

//Shift
function comprasShift(listaCompras){
    let primeiraCompra = listaCompras.shift();
    console.log(primeiraCompra);
    console.log(listaCompras);
    console.log('O método Shift, eliminou o primeiro elemento da minha lista: arroz.')
}
comprasShift(listaCompras);

//Unshift
function comprasUnshift(listaCompras){
    listaCompras.unshift('desifetante');
    console.log(listaCompras);
    console.log('O método Unshift adicionou mais um item no início da minha lista: desifentante.')
}
comprasUnshift(listaCompras);
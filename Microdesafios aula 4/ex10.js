

function Vendas(comprador,valorCompra,valorTotal){
    if(comprador=="(v)"){
   return valorTotal=(valorCompra*0.95).toFixed(2);
} else if(comprador=="(f)"){
    return valorTotal=(valorCompra*0.90).toFixed(2);
}else if(comprador=="(c)"){ 
    return valorTotal=valorCompra

}else{
    console.log("Digite uma das opções válidas de comprador:(c),(f) ou(v)");

}
}
console.log("O valor da compra é R$",Vendas("(v)",350.75));

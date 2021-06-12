
function custoMacas(quantidadeMaca){
    
    if (quantidadeMaca<12) {
       preco=1.30;
     return  total= preco*quantidadeMaca;
        
    } else {
        preco= 1.00;
      return  total= preco*quantidadeMaca;
    }
}

console.log(custoMacas(7).toFixed(2));
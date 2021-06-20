function Restaurante(nome,cardapio){
  this.nome=nome;
  this.cardapio=cardapio;
}

let entrada={
  nome:" Restaurante Pietro",
  cardapio: "Cardápio Pietro",
  mensagem:function(){
   return "Boas Vindas ao:"+ " " + entrada.nome+ ", "+ "este é o:"+ entrada.cardapio
  }
}

 console.log(entrada.mensagem())






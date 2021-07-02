let tempoPrato = {  
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
  };
  
  function microondas(prato, tempoMicroondas) {
    let tempoPreparo = tempoPrato[prato];

    if (tempoMicroondas >=3*tempoPreparo) {
        return "KABUMMM!!!";
      } else if (tempoMicroondas >=2*tempoPreparo) {
        return "Comida queimada!";
      } else if (tempoMicroondas <tempoPreparo) {
        return "Tempo insuficiente";
      } else if (prato!== 'pipoca' && prato!=='macarrao' && prato!=='carne' && prato!=='feijao'&& prato!=='brigadeiro')  {
        return "Prato inexistente!!!";
      } else {
        return "Prato pronto, bom apetite!!!";
      }
    }

  //testes 
  console.log(microondas("pipoca",10));
  console.log(microondas("pipoca",5));
  console.log(microondas("pipoca",20));
  console.log(microondas("pipoca",40));
  console.log(microondas("peixe",40));
  console.log(microondas("macarrao", 8));
  console.log(microondas("macarrao", 16));
  console.log(microondas("macarrao", 24));
  console.log(microondas("brigadeiro", 8));
  console.log(microondas("brigadeiro", 16));
  console.log(microondas("brigadeiro", 4));
  console.log(microondas("brigadeiro",30));
  console.log(microondas("carne", 10));
  console.log(microondas("carne", 15));
  console.log(microondas("feijao", 24));
  console.log(microondas("feijao",40));
  console.log(microondas("pudim",40));
  
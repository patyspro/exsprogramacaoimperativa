let numerosPrimos=[41,43,47,53, 59,61,67,71,73, 79,83,89,97];

let numeros=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,...numerosPrimos];
    console.log(numeros);

function maiorNumero(...numeros) {
   console.log( Math.min(...numeros));

}

maiorNumero(15,7,32);
// 1.Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

let numerosPares=[2,4,6,8,10];

let numerosImpar= numerosPares.map(function(impar){

    return impar -1;
});

console.log(numerosImpar);

// 2.Crie um array de nomes, que possua dois índices com o nome Maria. 
//Utilize o .filter() para obter apenas esses dois índices com o nome Maria

let nomes=['Maria','Sofia','Maria','Cecília'];

let nomeMaria= nomes.filter(el=>el=='Maria');
   console.log(nomeMaria);

//3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

const numerosAleatorios=[7,9,15,17,24,36];
const string=numerosAleatorios.reduce(
    function(acumulador,el){
        return acumulador + '-'+el
    }
)
console.log(string);

//4.Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
const animais=['leão','macaco','tigre','cachorro','gato'];
animais.forEach(
    function(animal){
    console.log('O animal é:' + animal);
})



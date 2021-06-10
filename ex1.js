function juntarNomes(texto1, texto2)
{
    //corpo da função
    return (texto1 + ' ' + texto2).toUpperCase();
}
// invocando a função
// execução se dá de dentro para fora
console.log(juntarNomes('Maria', 'José da Cunha'));
console.log(juntarNomes('felipe', 'gustAvo'));

function somar(number1, number2)
{
    return number1 + number2;

}
console.log(somar(3,4));

function subtracao(number1, number2)
{
    return number1 - number2;

}
console.log(subtracao(7,5));

let total; //função declarativa
function media(n1,n2,n3)
{
    let resultado=(n1+n2+n3)/3;
    //sq= square = quadrado
    //rt root = raiz

    return (Math.sqrt(resultado)).toFixed(2);
}
console.log(media(10,7,100));
//opção usando a var total
total=media(10,7,100);
console.log(total);
//opção usando a var total
total= (total*10).toFixed(2);
console.log(total);

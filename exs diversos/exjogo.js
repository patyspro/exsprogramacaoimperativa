let nomeJogador = "João";
let golsJogador= 0;
let precoEmDolares= 15000;
function fazerGol() {
golsJogador++;
console.log("GOL!!!!!");

}
precoEmDolares +=10000;
fazerGol();

console.log(nomeJogador," fez",golsJogador,"gols","e está valendo",precoEmDolares, "dólares");

function hatTrick() {
    fazerGol ();
    fazerGol ();
    fazerGol ();
}
hatTrick();
precoEmDolares *=1.10;

console.log(nomeJogador," fez",golsJogador,"e está valendo agora",precoEmDolares.toFixed(0), "dólares");
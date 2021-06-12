let contaCliente= 101516;
let debito=250.76;
let credito= 100;
let saldo=250.75;
let saldoAtual=saldo-debito+credito;
if (saldoAtual>=0) {
    console.log("Saldo Positivo:","R$",saldoAtual.toFixed(2));
} else {
   console.log("Saldo Negativo:","R$",saldoAtual.toFixed(2));
}

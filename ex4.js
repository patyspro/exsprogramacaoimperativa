let nome='Ana';
let sobrenome='Paula';
let idade=26;
let peso=55.0;
let altura=1.62;
let plano='Prata';
let imc=(peso/altura**2);
let imc2=Math.round(imc);
console.log(imc2);


console.log(nome,sobrenome,'tem',idade,
'anos e seu índice de massa corporal é de',
(imc.toFixed(2)),'.A paciente tem o plano de saúde',plano,'.');

let altura=1.60;
let vemAcompanhado= false;
 function podeSubir(altura,vemAcompanhado) 
 
    
 { if(altura>1.40 && altura<2.0) {
     console.log('Acesso autorizado');
 } else if (altura<1.40 && altura>=1.20 && vemAcompanhado==true) {
     console.log('Acesso autorizado somente com acompanhante'); 
 }
 else {
     console.log('Acesso negado');
   
 }

 }
podeSubir(1.20,true);



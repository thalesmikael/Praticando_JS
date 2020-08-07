/*function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra)
 }
  
 var palavras = ["Amor", "copo", "Bolacha", "biscoito"];
  
for (var i=0; i < palavras.length; i++) {
    if (comecaComMaiuscula(palavras[i])) {
        console.log('Começa com maiúscula')
    }else {
        console.log('Não começa com maiúscula')
    }
}*/


//Já esxite uma 'function validaCPF()' então por isso não precisa repetir ela
 
validaCPF("576.524.020-85")

for (var i=0; i < validaCPF.lenght; i++){
    if(validaCPF[i] == true){
        console.log('CPF válido')
    }else {
        console.log('CPF inválido')
    }
}
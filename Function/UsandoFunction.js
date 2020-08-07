/*function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }

 function deixaEntrar(dataDeNascimento, censura) {
     var dataDeNascimento = calcularIdade(dataDeNascimento)
     return dataDeNascimento >= censura
 }*/

 function maisBaratosQue(valor, precos) {
    return precos.filter(p => p <= valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p >= valor);
 }

 function precosEntre(valorMenor, valorMaior, precos){
     var maisBaratos = maisBaratosQue(valorMaior, precos)
     return maisCarosQue(valorMenor, maisBaratos);
 }


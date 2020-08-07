/*function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes) {
    if(nomesDosPresentes.indexOf(nomeDoAluno)!= -1){
        return true
    }else {
        return false
    }
}*/

/*function transformaParaMaiusculo(palavras) {
    var array = Array()

    for (var i=0; i < palavras.length; i++)

    array.push(palavras[i].toUpperCase())
    return array
}*/

/*function gerarDezenas(){
    var array = Array()

    for (var i=0; i < 6; i++){
        array.push(Math.round(Math.random*59)+1)
    }
}*/

function maxmin(a, b, c, d, e){
    var array = [0,0]

    array[0] = Math.min(a, b, c, d, e)
    array[1] = Math.max(a, b, c, d, e)

    return array
}
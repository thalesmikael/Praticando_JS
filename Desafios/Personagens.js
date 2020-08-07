var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

function filme(personagens, filmes, lancamentos, id){
if ((id > filmes.length + 1) || (id < 1)){
    var msg = ("Essa não é uma opção válida.")
    return msg
    }
    else{
    var msg = (personagens[id-1] + " é um personagem do filme " + filmes[id-1] + " que estreou no cinema em " + lancamentos[id-1] + ".")
    return msg
    }
}

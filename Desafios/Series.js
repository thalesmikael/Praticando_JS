var harryPotterPrefixo = "Harry Potter";
var harryPotterSeries = [
  "e a Pedra Filosofal",
  "e a Câmara Secreta",
  "e o Prisioneiro de Azkaban",
  "e o Cálice de Fogo",
  "e a Ordem da Fênix",
  "e o Enigma do Príncipe",
  "e as Relíquias da Morte"
];

function series(prefixo, array)
{
    var newArray = []
    for(var i =0; i < array.length; i ++){
        newArray.push(prefixo+ ' ' +  array[i])
}
return  newArray
}
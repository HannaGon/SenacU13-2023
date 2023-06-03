/*Dado duas variáveis:
nomeAluno > vai armazenar um nome.
repetirQuant > vai armazenar números

Crie uma função que repita a palavra de acordo
com a quantidade de vezes que você inserir para
que essa palavra repita.*/

var nome = "Fabio";
var quantidade = 324;

function repetirNome(nomeAluno, repetirQuant) {
  var palavraRepetida = "";
  
  for (var i = 0; i < repetirQuant; i++) {
    palavraRepetida += nomeAluno + " ";
  }
  return palavraRepetida;
}

var resultado = repetirNome(nome, quantidade);
console.log(resultado);

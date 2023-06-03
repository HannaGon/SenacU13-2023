/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */

 function calcularIdade(anoNascimento) {
    var anoAtual = new Date().getFullYear();
    var idade = anoAtual - anoNascimento;
    return idade;
  }
  
  var anoNasc = 1995;
  var idadeAtual = calcularIdade(anoNasc);
  console.log(idadeAtual);
  
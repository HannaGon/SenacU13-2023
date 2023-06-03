/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"*/

function compararNumero(num1, num2) {
    if (num1 > num2) {
      return "O maior número entre " + num1 + " e " + num2 + " é " + num1;
    } else if (num2 > num1) {
      return "O maior número entre " + num1 + " e " + num2 + " é " + num2;
    } else {
      return "Os números são iguais";
    }
  }
  
  // Exemplo de uso da função:
  var resultado = compararNumero(2, 7);
  console.log(resultado);
  
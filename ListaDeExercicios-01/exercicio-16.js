/*Escreva uma função chamada compararNumero que receberá dois parâmetros,
em seguida, retorne o número que for maior.
O retorno deverá conter essa mensagem:
"O maior número entre 5 e 10 é 10"*/
function compararNumero(n1, n2){
    if(n1>=n2){
        return n1
    }else if(n1<n2){
        return n2
    }
}
let n1 = 3, n2 = 4
console.log(`${compararNumero(n1, n2)} é maior`)
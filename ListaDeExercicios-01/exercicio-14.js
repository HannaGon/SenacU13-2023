/*Crie uma função que receba o parametro ano de nascimento
 e retorne a idade a partir do ano atual */
function idade(anoNascimento){
    let dataHoje = new Date()
    return dataHoje.getFullYear() - anoNascimento
}
let anoNascimento = 2004
console.log(`IDADE: ${idade(anoNascimento)}`)
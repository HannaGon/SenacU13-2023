//console.log()
//exibe o valor inserido entre parenteses

console.log("isso é uma string")    //string
console.log(25)                     //número
console.log(false)                  //boolean

let saudacao = "bom dia!"
console.log(saudacao)               //é possível utilizar variáveis
let dia = 26
console.log(saudacao + " hoje é dia " + dia)  
    //pode se utilizar + para concatenar valores
console.log(`${saudacao}, hoje é dia ${dia}`)
    //é possível escrever strings sem concatenar
    //escreva entre `` e com as variáveis dentro de ${}

let primeiroNumero = 10
let segundoNumero = 20
console.log(`a soma é ${primeiroNumero+segundoNumero}`)
//é possível calcular valores de saída na hora
//ou assignar o resultado a outra variável
let soma = primeiroNumero + segundoNumero
console.log("a soma é " + soma)

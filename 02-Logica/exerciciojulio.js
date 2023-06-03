//01
// Crie um programa que identifica se a variável é
// maior ou menor que 10 e te responde com uma string
// diferente para cada caso

let variavel = 90

if (variavel>=10){
    console.log("maior que 10")
}
else{
    console.log("menor que 10")
}

//02
// Crie um programa que responde com a cor de cada
// uma de 3 frutas possíveis (maçã, banana, melancia)

let fruta = "maçã"

if (fruta == "maçã"){
    console.log("vermelho")
} else if(fruta == "banana"){
    console.log("amarelo")
}else if (fruta == "melancia"){
    console.log("verde")
} else {
    console.log("RESPOSTA INVÁLIDA")
}

//03
// Crie um programa que pode somar, multiplicar ou dividir
// dois valores, dependendo do valor de uma terceira variável

let valor1 = 2
let valor2 = 5
let valorOperacao = "soma"

if(valorOperacao=="soma"){
    console.log(valor1+valor2)
} else if(valorOperacao=="multiplica"){
    console.log(valor1*valor2)
}else {
    console.log("Operação inválida")
}



//04
// Crie um programa que utiliza switch para informar
// a cor do lençol de 5 quartos em um hotel, o número
// do quarto será uma variável de seu controle

//05
// crie um loop for que repete uma mensagem 5 vezes

//06
// crie um loop for que repete uma operação matemática
// incrementalmente ao menos 3 vezes

//07
// crie um loop while que repete uma string enquanto
// o valor de uma variável tiver menos de 2 dígitos

//08
// dado a lista abaixo, criar um loop for of que retorna
// o dobro de cada valor listado
// let numerosExercicio = [2, 4, 8, 16, 32]
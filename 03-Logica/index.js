//Funções
//Exemplo 1
console.log("---Exemplo função 1 ------")

function calcularPrecoMedio (valorTotal,quantItens){
    let media = valorTotal/quantItens
    return console.log(media)
}

let total = 90
let numeroItens = 8

calcularPrecoMedio(total,numeroItens)

//Exemplo 2
console.log("---Exemplo função 2 ------")

function contarLetras(string) {
    let contaLetras = string.length
    return console.log(contaLetras)
}

let palavra = "gengibre"

contarLetras(palavra)

//As mesmas funções como arrow function
console.log("---Arrow Function 1 ------")
mediaArrow = (valorTotal,quantItens) =>console.log(valorTotal/quantItens)

let totalArrow = 50
let numeroItensArrow = 4
mediaArrow(totalArrow,numeroItensArrow)

console.log("---Arrow Function 2 ------")
let contarArrow = palavra =>console.log(palavra.length)

palavraArrow = "escrivaninha"
contarArrow(palavraArrow)

//Objetos
//Exemplo 1
console.log("---Objetos 1 -------------")
const senhorDosAneis = {
    livro1: "A Sociedade do Anel",
    livro2: "As Duas Torres",
    livro3: "O Retorno do Rei"
}
console.log(`O segundo livro se chama ${senhorDosAneis.livro2}`)

//Exemplo 2
console.log("---Objetos 2 -------------")
const aluno ={
    nome: "João",
    sobrenome: "Silva",
    endereco: "Rua Falsa",
    numero: 25
}
console.log(`${aluno.endereco}, ${aluno.numero}`)

//Desestruturando objetos
console.log("---Desestruturar objetos -")

const {nome,sobrenome} = aluno
console.log(nome + " " + sobrenome)

//Object Date()
console.log("---Objeto Date() ---------")
const dataHoje = new Date()
console.log("Hoje é " + dataHoje)

console.log("---Objeto Date() Locale---")
console.log("Hoje é " + dataHoje.toLocaleDateString("pt-BR"))
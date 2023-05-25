Exercícios - Lógica de programação 03
Funções & Arrays

Funções
 function nomeDaFuncao (variavel){
     //código
     //ou
     //return código
    }

Arrow function
 let nomeDaArrowFunction = (variaveis) => código

Objetos
 const variavel = new Object()
    variavel.key1 = "valor1"
    variavel.key2 = "valor2"
    variavel.key3 = "valor3"

 const variavel ={
    key1: "valor1",
    key2: "valor2",
    key3: "valor3"
 }

Acessando valores
variavel.key2
//resultado: valor2

variavel[key3]
//resultado: valor3

Desestruturando objetos
const {key1, key2} = variavel
    corresponde a
const key1 = variavel.key1
const key2 = variavel.key2

Objeto Date
    criação
        const nomeData = new Date()
        ou
        const diaHoje = nomeData.getDate()

Funções de data
getDate()
getMonth()
getFullYear()
toLocaleDateString("pt-BR")


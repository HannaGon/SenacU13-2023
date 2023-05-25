//if  else
//exemplo 1
console.log("---Exemplo de if else 1 --")

let senha = "batata"
//let senha = "ornitorrinco"

if (senha.length>=8){
    console.log("senha forte")
}
else{
    console.log("senha fraca")
}

//exemplo 2
console.log("---Exemplo de if else 2 --")

let numero = 2
let sobra = numero%2    
//o operador % divide pelo próximo número e retorna
//a sobra da divisão (Ex.:3/2 = 1.5 mas 3%2 é 0.5 )
console.log(sobra)
if (sobra==0){
    console.log("par")}
else {
    console.log("impar")
}

// else if
console.log("---Exemplo de else if ----")

let hora=19
console.log("hora: "+ hora)
if (hora>0 && hora<5){
    console.log("é madrugada")
}
else if (hora >5 && hora<12){
    console.log("é manhã")
}
else if (hora>12 && hora<19){
    console.log("é tarde")
}
else {
    console.log("é noite")
}

//switch case
console.log("---Exemplo de switch -----")
let pokemonNum = 02
switch (pokemonNum) {
    case 01:
        console.log("bulbasaur");
        break;
    case 02:
        console.log("ivysaur");
        break;
    case 03:
        console.log("venusaur");
        break;
    default:
        console.log("Não Encontrado")
        break;
}

//for
console.log("---Exemplo de for --------")

for (i=0;i<3;i++){
    console.log("Repetir 3 vezes")
}

//while
console.log("---Exemplo de while ------")
let contador = "O"
while (contador.length<4){
    console.log(contador)
    contador += "O"
}

//for of
console.log("---Exemplo de for of -----")
frutas = ["uva", "banana", "pessego"]

for (let fruta of frutas){
    console.log(`${fruta}s`)
}

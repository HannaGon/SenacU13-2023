/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */
function retornarNota(nota){
    if(nota <= 65){
        return "F"
    }else if(nota <= 70){
        return "D"
    }else if(nota <= 80){
        return "C"
    }else if(nota <= 90){
        return "B"
    }else{
        return "A"
    }
}
let nota = 87
console.log(`NOTA: ${retornarNota(nota)}`)
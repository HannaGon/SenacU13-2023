/*Escreva uma função chamada retornarNota que receberá um parâmetro do tipo número:
A função deve retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

function retornarNota(ponto) {

    if (ponto > 90){
     console.log("A")
    } else if(ponto > 80){
     console.log("B")
    }else if (ponto == 70){
     console.log("C")
    } else if (ponto > 65){
     console.log("D")
    } else {
        console.log("INVÁLIDO")
    }
}

var nota = retornarNota(91);

/* Reescreva a função abaixo utilizando 
Arrow Function */

function getUser(id, nome) {
  return {
    id: id,
    nome: nome
  }
}
let id = 1
let nome = "abx"

getUserArrow = (id, nome) => {
  return{
    id: id,
    nome: nome
  } 
}
console.log(getUserArrow(id, nome))
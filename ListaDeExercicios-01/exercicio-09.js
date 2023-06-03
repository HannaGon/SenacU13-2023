/* Dado um array de objetos: */
const usuarios = [
    { nome: "Maria", idade: 19 },
    { nome: "Lidiane", idade: 29 },
    { nome: "Joana", idade: 20 }
];

/*Exiba o nome e idade de todos os valores da variável.

A saída deverá ser:
Nome
Idade
Nome
Idade
etc */

for (let i = 0; i < usuarios.length; i++) {
    console.log("Nome: " + usuarios[i].nome);
    console.log("Idade: " + usuarios[i].idade);
}
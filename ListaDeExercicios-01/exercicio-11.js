/* Dado um objeto */
const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": " Mulheres, raça e classe",
        "quemEscreveu": "Angela Davis",
        "link": "https://edisciplinas.usp.br/pluginfile.php/4248256/mod_resource/content/0/Angela%20Davis_Mulheres%2C%20raca%20e%20classe.pdf"
    }
}

/*Liste todas as informações com o laço for in
A saída deverá ser:
Titulo
Autor
Link
...etc
*/
   
for (let info in livros) {
    console.log("Título: " + livros[info].titulo);
    console.log("Autor: " + livros[info].quemEscreveu);
    console.log("Link: " + livros[info].link);
    console.log();
}

/*crie uma função que usa Date() para exibir a
data de hoje em formato local brasileiro (pt-BR)*/

function data() {
    const opcoes = { year: 'numeric', month: 'long', day: 'numeric' };
    const data = new Date().toLocaleDateString('pt-BR', opcoes);
    console.log(data);
  }
    data();
  
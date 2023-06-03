/*crie uma função que usa Date() para exibir a
data de hoje em formato local brasileiro (pt-BR)*/
function data(){
    let dataHoje = new Date()
    return dataHoje.toLocaleDateString("pt-BR")
}
console.log(`DATA HOJE:\n${data()}`)
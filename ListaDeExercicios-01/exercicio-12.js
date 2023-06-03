//Crie uma função que dado o objeto a seguir com o parâmetro nome e sobrenome:
const endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
};
/*Retorne o seguinte conteúdo:*
Funcionário {nome} {Sobrenome} mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.
O retorno deverá ser template string*/
function nomeSobrenome (endereco) {
    let nome = "Murilo", sobrenome = "Boma"
    const {rua, numero, bairro, cidade, uf} = endereco

    console.log(`Funcionario ${nome} ${sobrenome} mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua ${rua} com nº ${numero}`)
}
nomeSobrenome(endereco)
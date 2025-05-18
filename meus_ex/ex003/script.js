var obj = [
    {nome: "erick", idade: 18, profissão: "rei eterno"},
    {nome: "mael", idade: 999, profissão: "portador do sol"},
    {nome: "miguel", idade: 1000000, profissão: "exterminar o mal"}
]// ARRAY(VETOR) COM OBEJETOS EM CADA INDICE

for (var c = 0; c < Object.keys(obj).length; c++) {
    console.log(`o individuo ${obj[c]["nome"]} com ${obj[c]["idade"]} anos de idade tem como profissão ${obj[c]["profissão"]}`)
}
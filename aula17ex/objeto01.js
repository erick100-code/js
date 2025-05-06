// var amigo = {nome: 'scoot', sexo: 'M', peso: '80.5', engordar(p){...}}
//O CÓDIGO ABAIXO É O MESMO QUE O DO ACIMA
var amigo = {
nome: 'scoot',
sexo: 'M' ,
peso: 80.5, 
engordar(p=0) {
    console.log('engordou')
    this.peso += p//este peso recebe peso mais parametro
}}

amigo.engordar(220)//chama a função engordar dentro do objeto amigo que adiciona numeros/kg a variavel peso

console.log(`meu amigo ${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso}`)
var vetor = [9, 3, 8, 4, 2, 6, 1]//defino os valores dentro do vetor
var of = vetor.indexOf(2)//faço a variavel of receber o indice do valor 1

if (of == -1) {//se o valor não foi achado no vetor então retornara -1
    console.log(`o valor não foi encontrado. ${of}`)
} else {//senão, se o valor foi achado, então ele mostra a posição
    console.log(`o valor esta na posição ${of}`)
}
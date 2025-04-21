var idade = 124

if (idade < 16) {
    console.log('não vota')
} else if (idade < 18) {
    console.log('voto opcional')
} else if (idade >= 18 && idade < 65) {
    console.log('voto obrigatorio')
} else if (idade >= 65 && idade <= 119) {
    console.log('voto opcional para os mais velhos')
} else {
    console.log('morto não vota')
}
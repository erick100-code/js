var idadev = 999999

if (idadev < 16) {
    console.log('não vota')
} else if (idadev < 18 || idadev > 65 && idadev < 119) {
    console.log('voto opctional')
} else if (idadev >= 18 && idadev <= 65){
    console.log('voto obrigatório')
} else {
    console.log('morto não vota')
}
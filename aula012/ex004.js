var atual = new Date() 
hora = atual.getHours()

if (hora < 6) {
    console.log('boa madrugada')
} else if (hora < 12) {
    console.log('bom dia')
} else if (hora < 18) {
    console.log('boa tarde')
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite')
} else {
    console.log('digite um horario valido (00 a 23)')
}
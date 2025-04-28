var numero = document.getElementById('nume')
var res = document.getElementById('res')
var bot = document.getElementById('bot')

bot.addEventListener('click', () => {
    if (numero.value.length == 0) {
        window.alert('por favor, digite um numero')
    } else {
        res.innerHTML = null
        var num = Number(numero.value)
        for (var c = 1; c <= 10; c++) {
            var resx = num * c
            res.innerHTML += `<br> ${num} X ${c} = ${resx} <br>`
        }
    }
})
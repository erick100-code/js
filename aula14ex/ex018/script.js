var bot = document.getElementById('bot')

bot.style.cursor = 'pointer'

bot.addEventListener('click', () => {
    var txtn = document.getElementById('txtn')
    if (txtn.value.length == 0) {
        window.alert('digite algo')
    } else {
        var sele = document.getElementById('sele')
        var nu = Number(txtn.value)
        sele.innerHTML = null
        for (var c = 1; c <= 10; c++) {
            var opt = document.createElement('option')
            opt.text = `${nu} X ${c} = ${c*nu}`
            opt.value = `item${c}`
            sele.appendChild(opt)
        }
    }
    
})
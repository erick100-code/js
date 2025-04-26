var botão = document.getElementById('contar')

botão.addEventListener('click', contando)

function contando() {
    var local = document.getElementById('local')
    var contador = 0
    local.innerHTML = ''
    while (contador <= 500) {
        local.innerHTML += `<br>passo ${contador}`
        contador++
    } 
}


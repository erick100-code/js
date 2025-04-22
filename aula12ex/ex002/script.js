var botão = document.getElementById('btn')
botão.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')//tag <img> criada e adicionada a variavel img
        img.setAttribute('id', 'foto')//adiciona um id a tag img. (img#foto)
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebehc.png')
            } else if  (idade < 18) {
                img.setAttribute('src', 'images/jovemhc.png')
            } else if (idade < 28) {
                img.setAttribute('src', 'images/adultohc.png')
            } else {
                img.setAttribute('src', 'images/velhohc.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebemc.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'images/jovemmc.png')
            } else if (idade < 28) {
                img.setAttribute('src', 'images/adultomc.png')
            } else {
                img.setAttribute('src', 'images/velhamc.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `você é um(uma) ${gênero} com ${idade} anos`
        resultado.appendChild(img)
    }
}
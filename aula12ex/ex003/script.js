var botão = document.getElementById('botão')
botão.addEventListener('click', carregar)

function carregar(){
    var nascimento = document.getElementById('nas')
    var resposta = document.getElementById('resposta')
    var data = new Date()
    var anoatual = data.getFullYear()
    var inradio = document.getElementsByName('radio')
    var idade = anoatual - Number(nascimento.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    if (nascimento.value.length == 0 || nascimento.value > anoatual) {
        window.alert('[ERROR] verifique os dados e tente novamente')
    } else {
        if (inradio[0].checked) {
            gênero = 'homem'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebehc.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'images/jovemhc.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adultohc.png')
            } else {
                img.setAttribute('src', 'images/velhohc.png')
            }
        } else {
            gênero = 'mulher'
            if (idade < 10) {
                img.setAttribute('src', 'images/bebemc.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'images/jovemmc.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'images/adultomc.png')
            } else {
                img.setAttribute('src', 'images/velhamc.png')
            }
        }
        resposta.style.textAlign = 'center'
        resposta.innerHTML = `você é ${gênero} com ${idade} anos <br> <br>`
        resposta.appendChild(img)
    }
}
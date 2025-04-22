window.addEventListener('load', carregar)

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    if (horas >= 0 && horas < 12) {
        //bom dia
        msg.innerHTML = `são exatamente ${horas} horas da manha`
        img.src = 'image/manhac.png' 
        document.body.style.backgroundColor = '#FED597'
    } else if (horas >= 12 && horas < 18) {
        //boa tarde
        msg.innerHTML = `são exatamente ${horas} horas da tarde`
        img.src = 'image/tardec.png'
        document.body.style.backgroundColor = '#FEB413'
    } else {
        //boa noite
        msg.innerHTML = `são exatamente ${horas} horas da noite`
        img.src = 'image/noitec.png'
        document.body.style.backgroundColor = '#1A3A4E'
    }
}
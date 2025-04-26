var botão = document.getElementById('botão')
botão.addEventListener('click', click)

function click() {
    var cxtexto = Number(document.getElementById('txt').value) //temos que pegar o valor primeiro depois converter para numero. //não podemos transformar um input em um numero só o valor dele

    if (cxtexto >= 100) {    
        var res = document.getElementById('res')
        var imagem = document.createElement('img')  
        imagem.id = 'imagem'
        imagem.src = 'img/sol.jpg'
        res.innerHTML = ''
        res.appendChild(imagem)
    } else {
        document.body.style.backgroundColor = 'red'
    }
}
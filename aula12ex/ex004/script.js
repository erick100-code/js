var b1 = document.getElementById('botão1')

var b2 = document.getElementById('botão2')

var res = document.getElementById('resultado')

b1.addEventListener('click', diminuir)
b2.addEventListener('click', aumentar)

var quanto = Number(window.prompt('quer contar pulando de quanto em quanto?'))
var até = Number(window.prompt('ate que numero quer contar?'))


function diminuir () {
    var valorAtual = Number(res.innerText)
    if (valorAtual <= 0) {
        window.alert('não é possivel ter valores negativos')
    } else {
        res.innerText = valorAtual - quanto
    }
}

function aumentar () {
    
    var valorAtual = Number(res.innerText)
    if (valorAtual < até) {
        res.innerText = valorAtual + quanto
    } else {
        window.alert('só até 100')
    }
   
}
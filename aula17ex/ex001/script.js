var caixatxt = document.getElementById('caixan')
var add = document.getElementById('add')
var select = document.getElementById('sec')
var finalizar = document.getElementById('fina')
var res = document.getElementById('res')
 
window.valores = []
window.maior = 0
window.menor = 100
window.s = 0

add.addEventListener('click', () => {
    var n1 = Number(caixatxt.value)

    if (n1 < 1 || n1 > 100 || caixatxt.value.length == 0) {
        window.alert('valor invalido ou já encontrado na lista')
    } else {

        for (c = 0; c <= valores.length; c++) {
            if (valores[c] == n1) {
                window.alert('valor ja encontrado')
                var tem = false
                c = valores.length
            } else {
                tem = true
            } 
        }

        if (tem == true) {
            valores.push(n1)
            var opt = document.createElement('option')
            opt.text = `valor ${n1} adicionado`
            select.appendChild(opt) 
            
            s = s + n1

            if (n1 > maior) {
                maior = n1
            }   
            
            if (n1 < menor) {
                menor = n1
            }
            res.innerHTML = ''
        }
    
    }
    caixatxt.value = ''//apaga o valor do input
    caixatxt.focus()//coloca foco no input
})

finalizar.addEventListener('click', () => {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        var div = s / 5
        res.innerHTML = ''
        res.innerHTML = `<br>ao todo, temos ${valores.length} cadastrados`
        res.innerHTML += `<br>o maior valor informado foi ${maior}`
        res.innerHTML += `<br>o menor valor informado foi ${menor}`
        res.innerHTML += `<br>somando todos os valores, temos ${s}`
        res.innerHTML += `<br>a média dos valores digitados é ${div}`        
    }
    
})
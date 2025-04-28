const cxinicio = document.getElementById('inicio')
const cxfim = document.getElementById('fim')
const cxpasso = document.getElementById('passo')
const botão = document.getElementById('bot')
const resposta = document.getElementById('res')

botão.addEventListener('click', () => {
    resposta.innerHTML = null
    if (cxinicio.value.length == 0 || cxfim.value.length == 0 || cxpasso.value.length == 0) {
        window.alert('impossivel contar')
    } else if (cxpasso.value == 0) { 
        window.alert('passo invalido considerando passo 1')
        
        var inicio = Number(cxinicio.value)
        var fim = Number(cxfim.value)
        var passo = Number(cxpasso.value) 
        
        passo = 1

        resposta.innerHTML = 'contando'   

        if (inicio < fim) {
            for (var c = inicio; c <= fim; c = c + passo) {
                resposta.innerHTML += ` ${c} 👉 `
            }
            resposta.innerHTML += `🏁`
        } else if (inicio > fim) {
            for(var c = inicio; c > fim; c = c - passo) {
                resposta.innerHTML += ` ${c} 👉 `
            }
            resposta.innerHTML += `🏁`
        }
                
    } else {
        var inicio = Number(cxinicio.value)
        var fim = Number(cxfim.value)
        var passo = Number(cxpasso.value) 

        resposta.innerHTML = 'contando'

        if (inicio > fim) {
            for (var c = inicio; c >= fim; c = c - passo) {
                resposta.innerHTML += ` ${c} 👉 `
            }
            resposta.innerHTML += `🏁`
        } else if (inicio < fim) {
            for(var c = inicio; c <= fim; c = c + passo) {
                resposta.innerHTML += ` ${c} 👉 `
            }
            resposta.innerHTML += `🏁`
        }      
    }
})

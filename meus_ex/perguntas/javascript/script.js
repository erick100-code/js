var botão = document.getElementById('bot')

botão.addEventListener('click', finalizar)

function finalizar() {

    //primera pergunta

    var in1 = document.getElementById('p1')
    var in2 = document.getElementById('p2')
    var in3 = document.getElementById('p3')
    var in4 = document.getElementById('p4')
    var in5 = document.getElementById('p5')
    var restrue1 = document.getElementById('restrue1')

    //segunda pergunta

    var in11 = document.getElementById('pp1')
    var in22 = document.getElementById('pp2')
    var in33 = document.getElementById('pp3')
    var in44 = document.getElementById('pp4')
    var in55 = document.getElementById('pp5')
    var restrue2 = document.getElementById('restrue2')

    //terceira pergunta 

    var in111 = document.getElementById('ppp1')
    var in222 = document.getElementById('ppp2')
    var in333 = document.getElementById('ppp3')
    var in444 = document.getElementById('ppp4')
    var in555 = document.getElementById('ppp5')
    var restrue3 = document.getElementById('restrue3')

    //quarta pegunta

    var in1111 = document.getElementById('pppp1')
    var in2222 = document.getElementById('pppp2')
    var in3333 = document.getElementById('pppp3')
    var in4444 = document.getElementById('pppp4')
    var in5555 = document.getElementById('pppp5')
    var restrue4 = document.getElementById('restrue4')

    //quinta ultima pergunta

    var inpu1 = document.getElementById('per1')
    var inpu2 = document.getElementById('per2')
    var inpu3 = document.getElementById('per3')
    var inpu4 = document.getElementById('per4')
    var inpu5 = document.getElementById('per5')
    var restrue5 = document.getElementById('restrue5')

    if(in1.checked || in2.checked || in3.checked || in4.checked || in5.checked) {
        var respondeu1 = 1
    } else {
        var respondeu1 = 0
    }
    // criar 3 variaveis respondeu 1,2,3,4,5 e só executa as propriedades js de cores e disabled se as variavies respondeu tiverem o mesmo valor. se não tiverem disparar um alerta
    if(in11.checked || in22.checked || in33.checked || in44.checked || in55.checked) {
        var respondeu2 = 1
    } else {
        var respondeu2 = 0
    }

    if (in111.checked || in222.checked || in333.checked || in444.checked | in555.checked) {
        var respondeu3 = 1
    } else {
        var respondeu3 = 0 
    }

    if (in1111.checked || in2222.checked || in3333.checked || in4444.checked || in5555.checked) {
        var respondeu4 = 1
    } else {
        var responde4 = 0
    }
    
    if (inpu1.checked || inpu2.checked || inpu3.cheked || inpu4.checked || inpu5.checked) {
        var respondeu5 = 1
    } else {
        var rondeu5 = 0
    }

    if (respondeu1 == 1 && respondeu2 == 1 && respondeu3 == 1 && respondeu4 == 1 && respondeu5 == 1) {
        //começa
        window.scrollTo(0, 0)
        //primera pergunta

        in1.style.accentColor = '#00ff00'
        in2.style.accentColor = 'red' 
        in3.style.accentColor = 'red' 
        in4.style.accentColor = 'red' 
        in5.style.accentColor = 'red'  

        if (in1.checked) {
            in2.disabled = 'true'
            in3.disabled = 'true'
            in4.disabled = 'true'
            in5.disabled = 'true'
        } else if (in2.checked) {  
            in1.disabled = 'true'
            in3.disabled = 'true'
            in4.disabled = 'true'
            in5.disabled = 'true'
            restrue1.style.backgroundColor = '#80808034'
        } else if (in3.checked) {
            in1.disabled = 'true'
            in2.disabled = 'true'
            in4.disabled = 'true'
            in5.disabled = 'true'
            restrue1.style.backgroundColor = '#80808034'
        } else if (in4.checked) {
            in1.disabled = 'true'
            in2.disabled = 'true'
            in3.disabled = 'true'
            in5.disabled = 'true'
            restrue1.style.backgroundColor = '#80808034'
        } else if (in5.checked) {
            in1.disabled = 'true'
            in2.disabled = 'true'
            in3.disabled = 'true'
            in4.disabled = 'true'
            restrue1.style.backgroundColor = '#80808034'
        }
        
        //segunda pergunta

        in11.style.accentColor = 'red'
        in22.style.accentColor = '#00ff00' 
        in33.style.accentColor = 'red' 
        in44.style.accentColor = 'red' 
        in55.style.accentColor = 'red'  

        if (in11.checked) {
            in22.disabled = 'true'
            in33.disabled = 'true'
            in44.disabled = 'true'
            in55.disabled = 'true'
            restrue2.style.backgroundColor = '#80808034'
        } else if (in22.checked) {
            in11.disabled = 'true'
            in33.disabled = 'true'
            in44.disabled = 'true'
            in55.disabled = 'true'
        } else if (in33.checked) {
            in11.disabled = 'true'
            in22.disabled = 'true'
            in44.disabled = 'true'
            in55.disabled = 'true'
            restrue2.style.backgroundColor = '#80808034'
        } else if (in44.checked) {
            in22.disabled = 'true'
            in33.disabled = 'true'
            in11.disabled = 'true'
            in55.disabled = 'true'
            restrue2.style.backgroundColor = '#80808034'
        } else if (in55.checked) {
            in22.disabled = 'true'
            in33.disabled = 'true'
            in44.disabled = 'true'
            in11.disabled = 'true'
            restrue2.style.backgroundColor = '#80808034'
        }

        //tercera pergunta

        in111.style.accentColor = 'red'
        in222.style.accentColor = 'red' 
        in333.style.accentColor = '#00ff00' 
        in444.style.accentColor = 'red' 
        in555.style.accentColor = 'red'  

        if (in111.checked) {
            in222.disabled = 'true'
            in333.disabled = 'true'
            in444.disabled = 'true'
            in555.disabled = 'true'
            restrue3.style.backgroundColor = '#80808034'
        } else if (in222.checked) {
            in111.disabled = 'true'
            in333.disabled = 'true'
            in444.disabled = 'true'
            in555.disabled = 'true'
            restrue3.style.backgroundColor = '#80808034'
        } else if (in333.checked) {
            in111.disabled = 'true'
            in222.disabled = 'true'
            in444.disabled = 'true'
            in555.disabled = 'true'
        } else if (in444.checked) {
            in222.disabled = 'true'
            in333.disabled = 'true'
            in111.disabled = 'true'
            in555.disabled = 'true'
            restrue3.style.backgroundColor = '#80808034'
        } else if (in555.checked) {
            in222.disabled = 'true'
            in333.disabled = 'true'
            in444.disabled = 'true'
            in111.disabled = 'true'
            restrue3.style.backgroundColor = '#80808034'
        }

        //quarta pergunta

        in1111.style.accentColor = 'red'
        in2222.style.accentColor = 'red' 
        in3333.style.accentColor = '#00ff00' 
        in4444.style.accentColor = 'red' 
        in5555.style.accentColor = 'red'

        if (in1111.checked) {
            in2222.disabled = 'true'
            in3333.disabled = 'true'
            in4444.disabled = 'true'
            in5555.disabled = 'true'
            restrue4.style.backgroundColor = '#80808034'
        } else if (in2222.checked) {
            in1111.disabled = 'true'
            in3333.disabled = 'true'
            in4444.disabled = 'true'
            in5555.disabled = 'true'
            restrue4.style.backgroundColor = '#80808034'
        } else if (in3333.checked) {
            in1111.disabled = 'true'
            in2222.disabled = 'true'
            in4444.disabled = 'true'
            in5555.disabled = 'true'
        } else if (in4444.checked) {
            in2222.disabled = 'true'
            in3333.disabled = 'true'
            in1111.disabled = 'true'
            in5555.disabled = 'true'
            restrue4.style.backgroundColor = '#80808034'
        } else if (in5555.checked) {
            in2222.disabled = 'true'
            in3333.disabled = 'true'
            in4444.disabled = 'true'
            in1111.disabled = 'true'
            restrue4.style.backgroundColor = '#80808034'
        }

        //quinta e ultima pergunta

        inpu1.style.accentColor = 'red'
        inpu2.style.accentColor = '#00ff00' 
        inpu3.style.accentColor = 'red' 
        inpu4.style.accentColor = 'red' 
        inpu5.style.accentColor = 'red'  

        if (inpu1.checked) {
            inpu2.disabled = 'true'
            inpu3.disabled = 'true'
            inpu4.disabled = 'true'
            inpu5.disabled = 'true'
            restrue5.style.backgroundColor = '#80808034'
        } else if (inpu2.checked) {
            inpu1.disabled = 'true'
            inpu3.disabled = 'true'
            inpu4.disabled = 'true'
            inpu5.disabled = 'true'
        } else if (inpu3.checked) {
            inpu1.disabled = 'true'
            inpu2.disabled = 'true'
            inpu4.disabled = 'true'
            inpu5.disabled = 'true'
            restrue5.style.backgroundColor = '#80808034'
        } else if (inpu4.checked) {
            inpu2.disabled = 'true'
            inpu3.disabled = 'true'
            inpu1.disabled = 'true'
            inpu5.disabled = 'true'
            restrue5.style.backgroundColor = '#80808034'
        } else if (inpu5.checked) {
            inpu2.disabled = 'true'
            inpu3.disabled = 'true'
            inpu4.disabled = 'true'
            inpu1.disabled = 'true'
            restrue5.style.backgroundColor = '#80808034'
        }
        //acaba
    } else if (respondeu1 == 0 || respondeu2 == 0 || respondeu3 == 0 || respondeu4 == 0 || respondeu5 == 0) {
        window.alert('prencha todas as alternativas')
    }
}
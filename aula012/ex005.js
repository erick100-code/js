var data = new Date()//seleciona a data completa
var diaSemana = data.getDay()//seleciona que tipo de data, no caso (o dia do mes)

/*
    0 = domingo
    1 = segunda
    2 = terça     
    3 = quarta     //esses são os dias do mesmo segundo js.
    4 = quinta
    5 = sexta
    6 = sabado
*/

//      expressão 
switch (diaSemana) {
    case 0:
        console.log('domingo')//diz o nome do dia da semana
        console.log(`1 dia da semana`)
        break
    case 1:
        console.log('segunda')//diz o nome do dia da semana segundo nosso calendario
        console.log(`${diaSemana + 1} dia da semana`)//diz o numero do dia da semana com base no nosso calendario 
        break //termina aqui
    case 2:
        console.log('terça')
        console.log(`${diaSemana + 1} dia da semana`)
        break
    case 3: 
        console.log('quarta')
        console.log(`${diaSemana + 1} dia da semana`)
        break
    case 4:
        console.log('quinta')
        console.log(`${diaSemana + 1} dia da semana`)
        break
    case 5: 
        console.log('sexta')
        console.log(`${diaSemana + 1} dia da semana`)
        break
    case 6:
        console.log('sabado')
        console.log(`${diaSemana + 1} dia da semana`)
        break
    default:
        console.log('[ERROR] undefined options switch')
    //se não for nenhuma das opções acima ele executa o DEFAULT:
}
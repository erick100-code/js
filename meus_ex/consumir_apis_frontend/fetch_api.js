const  URL = 'https://dummyjson.com/carts'// RETORNA A LISTA NO FORMATO JSON

async function chamarApi() { // ASYCN PORQUE LEVA TEMPO 
    const res = await fetch(URL) // PASSAMOS COMO PARAMETRO A URL QUE QUEREMOS CONSUMIR
    // res ARMAZENA A RESPOSTA DA API
    // ESSE res NÃO É UM OBJETO JSON É APENAS RESPOSTA DA API, SE DEU TUDO CERTO OU DEU PROBLEMA

    if (res.status === 200) {
        const obj = await res.json()
        console.log(obj)
    }
}

chamarApi()

// STATUS: 200 == OK
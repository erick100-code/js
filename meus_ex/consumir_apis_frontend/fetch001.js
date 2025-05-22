const URL = 'https://dummyjson.com/products'

async function api() {
    const res = await fetch(URL)

    if (res.status === 200) {
        const obj = await res.json()
        console.log(obj)    
    }
}

api()
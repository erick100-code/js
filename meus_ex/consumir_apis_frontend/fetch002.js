const URI = 'https://dummyjson.com/products?sortBy=title&order=asc'

async function chamarApi() {
    const res = await fetch(URI)

    if (res.status === 200) {
        const obj = await res.json()
        console.log(obj)
    }
}

chamarApi()
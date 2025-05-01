function fator(n) {//parametro
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat *= c 
    }

    return fat
}

console.log(fator(5))
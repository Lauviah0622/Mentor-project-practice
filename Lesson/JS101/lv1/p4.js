function star(n) {
    let str = ""
    for (let i = 1; i < n + 1; i++) {
        str += "*"
    }

    return str
}

console.log(star(10))
function repeat(str, n) {
    let result = ''
    for (let i = 0; i < n; i++) {
        result += str
    }
    return result
}

console.log(repeat('test', 5))

module.exports = repeat
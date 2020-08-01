function getFib(n) {
    return n === 0 ? 0 : n === 1 ? 1 : getFib(n - 1) + getFib(n - 2)
}
console.log(getFib(10))

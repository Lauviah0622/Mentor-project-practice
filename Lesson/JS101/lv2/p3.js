function table(n) {
    let ans = ''
    for (let i = 1; i < 10; i++) {
        ans += `${n} * touch ${i} = ${i * n}\n`
    }
    return ans

}

console.log(table(7))
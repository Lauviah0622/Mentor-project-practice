var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
    lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
    solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function solve(lines) {
    const num = lines[0]
    const input = [...lines]
    .slice(1)
        .map(e =>  e.split(' '))
    check(input)
    // let input = [...lines]
    //     .slice(1, +num + 1)
    //     .map(e => {
    //         return e.split(' ')
    //     })
    //     .map(e => result(...e))
    //     .join('\n')
    // console.log(input)
    // .forEach(val => console.log(val))
}

function check(input) {
    const output = [...input]
        .map(e => result(...e))
        // .join('\n')
    console.log(output)
}


function result(a, b, c) {
    a = BigInt(+a)
    b = BigInt(+b)
    console.log('result', a, b, c)
    if (c === '1') return a > b ? 'A' : a < b ? 'B' : 'DRAW'
    else if (c === '-1') return a < b ? "A" : a > b ? 'B' : 'DRAW'
}

var readline = require('readline');
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
  lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function solve(lines) {
    let n = +lines[0]
    let leaf = '';
    let trunk = '';

    for (let i = 1; i <= n; i++) {
        
        let leafSpace = repeat(" ", n - i);
        let leafs = repeat('*', (2 * i) - 1);
        leaf += `${leafSpace}${leafs}\n`
        let trunkSpace = repeat(" ", n - 1);
        if (i !== n) {
            trunk += `${trunkSpace}|`
            trunk += '\n'
        }
        // console.log('leaf', leaf)
        // console.log('trunk', trunk)
    }
    console.log(leaf + trunk)

    // 樹葉包含 * 還有 _ 樹葉有 n 層
    // * 的數量 = 2n + 1, _ 數量 = i - 1

    // 樹幹包含 | 還有 _ , 有 n - 1 層
    // | 為 1, _ 為 n - 1
}

function repeat(str, num) {
    let output = ''
    for (let i = 0; i < num; i++) {
        output += str
    }
    return output
}

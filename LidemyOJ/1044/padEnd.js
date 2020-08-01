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

function solve(line) {
    console.log(
        padEnd(line[0], line[1], line[2])
    )
}

function padEnd(str, length, padStr) {
    let result = '';
    if (length < str.length) return str
    for (let i = 0; i < length; i++) {
        if (str[i]) {
            result += str[i]
            // console.log(str[i])
        } else {
            result += padStr[(i - str.length) % padStr.length]
            // console.log(padStr[(i - str.length) % padStr.length])
        }
    }
    // console.log('result', result)
        return result
}
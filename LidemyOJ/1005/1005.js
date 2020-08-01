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
rl.on('close', function() {
  solve(lines)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容

function solve(lines) {
    const input = [...lines];
    input.forEach(val => {
        if (val !== "0") {
            console.log(compare(val))
        }
    })
}

function compare(num) {
    const a = amicableNumSum(num);
    const b = amicableNumSum(amicableNumSum(num));
    // console.log(num, a, b)
    if (+num === b) return a
    else return 'QQ'
}

function amicableNumSum(num) {
    return  getDivisorsArray(num).reduce((acc, val) => acc + val, 0)
}

function getDivisorsArray(num) {
    const devisorsArray = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            devisorsArray.push(i)
        }
    }
    return devisorsArray
}
// console.log(amicableNumSum(amicableNumSum(220)))
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
    let champs = [];

    const statData = lines.slice(1)
    .map(val => val.split(' '))
    .map(val => {
        return {
            name: val[0],
            score: +val[1]
        }
    })

    // console.log(statData)

    statData.reduce((topScore, val) => {
        // console.log(topScore, val)
        if (val.score > topScore) {
            champs = [val.name]
            return val.score
        } else if (val.score === topScore) {
            champs.push(val.name)
            return topScore
        } else {
            return topScore
        }
    }, 0)

    champs.forEach(e => console.log(e))
    // console.log(champs)
}
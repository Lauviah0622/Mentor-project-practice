var readline = require('readline');
const { isNumber, callbackify } = require('util');
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
    let rawData = lines.slice(1);
    let coorPair = [];
    // let coorDstses = [];
    for (let i = 0; i < rawData.length / 4; i++) {
        const index = i * 4
        coorPair.push([createCoor(rawData[index], rawData[index + 1]), createCoor(rawData[index + 2], rawData[index + 3])])
    }

    for (let i = 0; i < coorPair.length; i++) {
        const e = coorPair[i];
        // console.log('coorPair', e)
        console.log(FixTo2Digits(calCoorDis(...e)))
    }
    // console.log(coorPair)
}

const createCoor = (x, y) => { return {x: x, y: y} }

function calCoorDis(a, b) {
    // console.log(a, b)
    let xDis = abs(b.x - a.x);
    let yDis = abs(b.y - a.y);
    return (xDis ** 2 + yDis ** 2) ** (1 / 2)
}

const abs = (num) => {
    if (!isNumber(num)) return false
    else if (num > 0) return num
    else if (num < 0) return -num
    else return 0
}

const FixTo2Digits = (num) => {
    return (Math.round( 100 * num) / 100).toFixed(2)
}

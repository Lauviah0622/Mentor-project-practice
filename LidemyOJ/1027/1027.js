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
    console.log(isValidCC(lines[0]))
}

function isValidCC(str) {
    let seq = toPureNumArr(str);
    // console.log(seq)
    if (seq.length !== 16) return 'INVALID'
    let checkNum = +seq[15];
    let calcedNum = 10 - (countWeightingSum(seq) % 10);

    // console.log('calcedNum', calcedNum, 'checkNum', checkNum)
    if (calcedNum !== checkNum) return 'INVALID'
    else  {
        let carMapping = {
            5: 'MASTER_CARD',
            4: 'VISA'
        }
        return carMapping[seq[0]] || 'INVALID'
    }

}

function toPureNumArr(str) {
    // str.split('-').concat('').split('')
    return str.split('-').join('').split('')
}


function countWeightingSum(seq) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < seq.length - 1; i++) {
        const e = +seq[i];
        if (isNaN(e)) {
            return false
        }
        else if (i % 2 === 0) {
            oddSum += (2 * e >= 10 ? 2 * e - 9 : 2 * e)
            // console.log('odd', (2 * e > 10 ? 2 * e - 9 : 2 * e))
        } else {
            evenSum += e
            // console.log('even', (e > 10 ? e - 9 : e))

        }
    }
    return oddSum + evenSum
}


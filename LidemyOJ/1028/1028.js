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
    // console.log(lines)
    const birthNum = getBirthNum(lines[0]);
    // console.log(birthNum)
    console.log(countLSN(birthNum))
}

function countLSN (birthNum) {
    let sum = 0;
    while ( birthNum > 0) {
        let mod = birthNum % 10;
        sum += mod;
        birthNum = devide(birthNum, 10)[0];
        // console.log('mod', mod, 'sum', sum, 'birthNum', birthNum)
    }

    if (sum > 0 && sum <= 10) {
        return sum
    } else if ( sum > 10) {
        return countLSN(sum)
    } else {
        return 'Error'
    }
}

function getBirthNum(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i]) || str[i] === '0') {
            output += str[i]    
        }
    }
    return output
}

function devide(devidend, devisor) {
    let remainder = devidend % devisor
    let quotient = (devidend - remainder) / devisor;
    return [quotient, remainder]
}


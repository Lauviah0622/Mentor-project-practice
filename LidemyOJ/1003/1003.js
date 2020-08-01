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
    let inputArr = [...lines];

    // get raw array
    let originWordArr = getWordArray(inputArr, 1, +inputArr[0] + 1);
    let chaPosArr = getWordArray(inputArr, +inputArr[0] + 2, inputArr.length)
    // console.log(originWordArr, chaPosArr)

    
    const originWord = originWordArr.join('');
    console.log(chaPosArr.map(val => originWord[+val - 1]).join(''))
}

function getWordArray(arr, from, to) {
    return arr.slice(from, to)
}

// let input = `2
// yo
// man
// 3
// 4
// 2
// 1`

// console.log(
//     q1(input)
// )
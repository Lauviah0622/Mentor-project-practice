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
    let offset = +lines[0]
    // console.log(offsetMap(offset))
    console.log(
        offsetStr(lines[1], offsetMap(offset))
    )
    
}
function offsetStr(str, map) {
    let offsetedStr = ''
    for (let i = 0; i < str.length; i++) {
        const e = str[i];
        offsetedStr += map[e]
    }
    return offsetedStr
}

function offsetMap(n) {
    let charMap = {};
    let offset = n % 26
    for (let i = 97; i <= 122; i++) {
      let e = String.fromCharCode((i + offset > 122) ? (i + offset - 26) : (i + offset))
      charMap[String.fromCharCode(i)] = e
    }
    return charMap
  }
  
  // console.log(offsetMap(10))
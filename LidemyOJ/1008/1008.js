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

function solve(line) {
  getBuckets(+line[0])
  // console.log(2 ** 31)
  
}

function getBuckets(num) {
  let buckets = 0;
  let bucketsList = [];
  (function minusMaxExpoNum(input) {
    let num = input;
    let maxExponent = getExponent(num);
    if (num > 0) {
      num -= maxExponent;
      minusMaxExpoNum(num)
      bucketsList.push(maxExponent)
      buckets++
    } else {
      return 
    }
  }(num))
  console.log(buckets)
  // console.log('bucketsList', bucketsList)
}

function getExponent(num) {
  let index = 0;
  while (2 ** index <= num) {
    index++
  }
  return 2 ** (index - 1)
}

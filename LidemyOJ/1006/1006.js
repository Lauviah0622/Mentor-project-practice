var readline = require('readline');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG, DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
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
    const sibilings = []

    //處理 input
    const seatsNum = +lines[0];
    const holdedSeats = lines.slice(2);

    //列出桌號
    const seatsArr = new Array(seatsNum)
        .fill(0)
        .map((ele, i) => {
            return holdedSeats.includes(String(i + 1)) ? 0 : i + 1
        });
    // console.log(seatsArr)
    //loop 桌號
    seatsArr.forEach((targetEle) => {
        if (targetEle === 0) return //0 代表有坐人不用比
        seatsArr.forEach((compareEle) => {
            //所有數字互相比對
            if (compareEle === 0) return //同上
            
            // console.log(targetEle, compareEle)
            if (checkSibiling(targetEle, compareEle)) {
                sibilings.push([targetEle, compareEle])
                //都 OK 再加進去
            }
        })
    })

    console.log(sibilings.length / 2)
    //因為有重複，所以要除以 2
   
        
        // console.log(數量就好)
        
    }
    
    function checkSibiling(target, compare) {
        const gap = target - compare;
        // console.log(target, ':', compare, '=>', gap)
        if (target % 2 === 1) {
            return [-1, -2, 2].includes(gap)
            //n & 2 = 1(奇數) === 0 相鄰 n' => n + 1, n + 2, n - 2 
            
        } else {
            return [2, -2, 1].includes(gap)
            //n & 2 = 0(偶數) === 0 相鄰 n' => n - 1, n + 2, n - 2 
        }
    }
    
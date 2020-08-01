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
    let rawData = lines.slice(1);
    let crds = [];
    let minDis = Infinity;
    let min = null

    // 將字串分成座標
    for (let i = 0; i < rawData.length; i++) {
        let e = rawData[i]
        let crd = createCoor(...e.split(' '))
        crd.pairTimes = 0;
        crds.push(crd)
    }

    // 處理座標之間的距離
    for (let i = 0; i < crds.length; i++) {
        for (let j = i + 1; j < crds.length; j++) {
            const a = crds[i];
            const b = crds[j];
            if (a === b) continue
            let dis = calCoorDis(a, b)
            // console.log('dis', dis, 'minDis', minDis, [a.x, a.y], [b.x, b.y])
            if (dis < minDis) {
                // console.log('change')
                minDis = dis;
                min = {a, b}
            }
        }
    }
    // console.log(min.a.x, min.a.y, min.b.x, min.b.y)
    // 印出最短距離的座標
    const printAFirst = (isAFirst) => {
        if (isAFirst) {
            console.log(min.a.x, min.a.y)
            console.log(min.b.x, min.b.y)
        } else {
            console.log(min.b.x, min.b.y)
            console.log(min.a.x, min.a.y)
        }
    }


    
    if (+min.a.x > +min.b.x) {
        printAFirst(false)
    } else if (+min.a.x < +min.b.x) {
        printAFirst(true)
    } else {
        if (+min.a.y < +min.b.y) {
            printAFirst(true)
        } else {
            printAFirst(false)
        }
    }
}

function calCoorDis(a, b) {
    let xDis = abs(b.x - a.x);
    let yDis = abs(b.y - a.y);
    return (xDis ** 2 + yDis ** 2) ** (1 / 2)
}

const abs = (num) => {
    if (num > 0) return num
    else if (num < 0) return -num
    else return 0
}

const createCoor = (x, y) => { return { x: x, y: y } }




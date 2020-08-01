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
    let matrix = transOXmatrix(lines)
    console.log(
        oxWin(matrix)
    )
    // console.log(matrix)
}

function transOXmatrix(arr) {
    let matrix = [];
    for (let i = 0; i < lines.length; i++) {
        let e = arr[i]
        const row = e.split('');
        matrix.push(row)
    }
    return matrix
}

function oxWin(matrix) {
    return checkColumnWin(matrix) || checkRowWin(matrix) || checkSlashWin(matrix) || "DRAW"

}

function checkColumnWin (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        const testArr = []
        for (let j = 0; j < matrix.length; j++) {
            let e = matrix[j][i]
            testArr.push(e)
        }
        if (eleAllSame(testArr)) return eleAllSame(testArr)
    }
    return false
}

function checkRowWin (matrix) {
    
    for (let i = 0; i < matrix.length; i++) {
        const testArr = []
        for (let j = 0; j < matrix.length; j++) {
            let e = matrix[i][j]
            testArr.push(e)
        }
        if (eleAllSame(testArr)) return eleAllSame(testArr)
    }
    return false

}


function checkSlashWin (matrix) {
    const slashArr = [];
    const backslashArr = [];
    for (let i = 0; i < matrix.length; i++) {
        slashArr.push(matrix[i][i])   
        backslashArr.push(matrix[i][matrix.length - 1 - i])   
    }
    // console.log(slashArr, backslashArr)
    return eleAllSame(slashArr) || eleAllSame(backslashArr)

}
// console.log(checkSlashWin([
//     ['O', 'X', 'X'],
//     ['X', 'O', 'X'],
//     ['X', 'X', 'O'],

// ]))
function eleAllSame(arr) {
    let ref = ''
    for (let i = 0; i < arr.length; i++) {
        let e = arr[i]
        // console.log(e)
        if (i === 0) {
            ref = e
        } else {
            if (e !== ref) return false
        }
    }
    return ref

}
// console.log(eleAllSame(['a', 'a', 'a', 'a', 's']))
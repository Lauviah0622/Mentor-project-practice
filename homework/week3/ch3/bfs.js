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

function solve(line) {
  getMazeSteps(line.slice(1).map(e => e.split('')))
}

function getMazeSteps(maze) {
  // console.log('maze', maze)
  let current = 0;
  let steps = 0;
  let record = [[0, 0]];
  let stepRecord = [0];

  function search(current, record) {
    let isEnd = false;
    const currentCord = record[current];
    const directions = [[1, 0], [0, -1], [-1, 0], [0, 1]];
    const nearBlocks = directions
      .map(e => [currentCord[0] + e[0], currentCord[1] + e[1]])
      .filter(coord => {
        const [x, y] = coord;
        // console.log(currentCord, 'search', x, y)
        if (x === (maze[0].length - 1) && y === (maze.length - 1)) isEnd = true;
        if (x < 0 || x >= maze[0].length) return false;
        if (y < 0 || y >= maze.length) return false;
        if (maze[y][x] === '#') return false
        const isWalked = record.map(e => {
          return e[0] === x && e[1] === y
        })

        if (isWalked.includes(true)) return false
        return true
      });
    // console.log('current', current, 'search result', nearBlocks)
    return isEnd ? 'end' : nearBlocks;
  }

  // search(current, record)

  function walk(current) {
    if (current > (record.length - 1)) {
      console.log('fail')
      return 
    }
    const currentCord = record[current];
    const path = search(current, record); // 找到可以走的路
    if (path.length !== 0 && current <= (record.length - 1)) {
      steps = (stepRecord[current] + 1);    
    }
    if (path === 'end') {
      console.log(steps)
      return 
    } else {
      // !stepRecord[current + 1] 表示紀錄的路都走完了 找到路了，下一格是目前的 +1
      path.forEach(e => {
        record.push(e);
        stepRecord.push(steps);
      }) // 加進去 record
    }

    // 下一個地方走
    current += 1;
    if  (currentCord[0] === (maze[0].length - 1) &&  currentCord[1] === (maze.length - 1)) {
      console.log(steps)
      return 
    } else {
      walk(current)
    }

  }

  walk(current)


}


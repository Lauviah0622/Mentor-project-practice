var readline = require('readline');
const { DH_UNABLE_TO_CHECK_GENERATOR } = require('constants');
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
  const line1 = line[0].split(' ');
  const items = line.slice(1)
    .map(e => e.split(' ').map(e => +e))
  countKnapsack(+line1[1], items);
}

function create2DArray(row, column, initializer) {
  const table = new Array(row).fill('');
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(column).fill(initializer)
  }
  return table
}

function countKnapsack(maxWeight, items) {
  // console.log(maxWeight, items)
  let max = 0;


  const memory = create2DArray(items.length, maxWeight + 1, null);

  function memorize(y, x, value) {
    if (typeof value === "number") {
      memory[y][x] = value;
      return
    } else {
      let result = 0;
      try {
        result = memory[y][x];
      } catch (e) {
        // console.log(`no memory[${y}][${x}]`)
      }
      return result
    }
  }

  function count(maxWeight, items) {
    let i = items.length - 1
    const lastItem = items[0];
    if (lastItem[0] > maxWeight) {
      // console.log(`f[${i}][${maxWeight}]`)
      // console.log('====================')

      return memorize(i - 1, maxWeight) || 0
    }
    const val = (i) === 0 ? 0 : memorize(i - 1, maxWeight - lastItem[0]); 
    const valueGetLast = lastItem[1] + val;
   
    const valueNotGetLast = memorize(i - 1, maxWeight);
    
    // console.log(`i:${i}    j:${maxWeight}`)
    // console.log(`i[i - 1][j]`, i)
    // console.log(`i - 1: `, i - 1, `,j - w[i]: `, maxWeight - lastItem[0],`=`,  val)
    // console.log(`max{${valueGetLast}, ${valueNotGetLast}}`)
    // console.log('=>   final', Math.max(valueGetLast, valueNotGetLast))
    // console.log('====================')
    return Math.max(valueGetLast, valueNotGetLast)
  }

  function iterateItems(items) {
    let sortedItems = [...items.sort((a, b) => {
      if (b[0] === a[0]) {
        return a[1] - b[1]
      }
      return b[0] - a[0]
    })]
      .map(e => [+e[0], +e[1]]);
    // console.log('sortedItems', sortedItems)

    for (let i = 1; i <= sortedItems.length; i++) {
      for (let weight = 0; weight <= maxWeight; weight++) {
        let items = sortedItems.slice(sortedItems.length - i)
        if (weight === 0) {
          memorize(items.length - 1, weight, 0);
          continue
        }
        // console.log('iterate', weight, items)
        let value = count(weight, items);
        memorize(items.length - 1, weight, value)

      }
    }
  }


  iterateItems(items)
  // memorize()
  // count(12, items)
  // console.log('memory : ', memory)
  console.log(memory[memory.length - 1][memory[0].length - 1]) 
}






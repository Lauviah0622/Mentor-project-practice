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
  ch3(line)
}

function ch3(map) {
  let graph = (function getMapGrpah() {
    const nodeList = getNodeList(map);  //先拿到所有的傳送門、入口、出口的座標
    console.log(nodeList)
  
    const vertice = {};
    const edge = {};
  
    setVertice();
    setEdge();
  
    return {vertice, edge}
    
  }())
}

function getNodeList(map) {
  let nodeList = [];
  let mapArr = map.map(e => e.split(''));
  for (let i = 0; i < mapArr.length; i++) {
    for (let j = 0; j < mapArr[i].length; j++) {
      const e = mapArr[i][j];
      let isCha = cha => isInrule(cha, /\w/);
      if (isCha(e)) {
        let cha2 = getSibling([i, j], isCha)
        const isDot = cha => isInrule(cha, /\./);
        let nodeCoor = getSibling([i, j], isDot) || getSibling(cha2.coor, isDot);  
        // 已經拿到點的座標了，但是有重複 篩選掉重複的點座標，然後把點加進去 nodeList 裡面
        console.log('nodeCoor',i ,j,':', nodeCoor);
        
        if ()
        addNode(nodeName, nodeType, coor) 
        // type 有三種：傳送們（用名子表示: 所以會有兩個 BC 兩個DE ... 依此類推）、入口、出口

      }
    }
  }

  function isInrule(cha, regexp) {
    if (typeof cha !== "string") return false
    return cha.match(regexp)
  }

  function getSibling([y, x], isFunc) {
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const sibilingCha = dir
      .map(([dy, dx]) => {
        let text = ''
        try { // 預防 arr[-1][n] 會 arr[-1] undefined
          text = mapArr[y + dy][x + dx] 
        } catch (e) {
          text = null
        }
        return {
          text ,
          coor: [y + dy, x + dx]
        }
      })
      .filter(e => isFunc(e.text))
    return sibilingCha[0] || null
  }
  // console.log(mapArr)
  // console.log(getSibling([0, 9], isCha))
  return nodeList
}
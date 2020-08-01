function sort(arr) {
    const sortingArr = [...arr]; //duplicate array
    const sortedArr = []
    
    while (sortingArr.length > 0) {
        let collectEle = sortingArr.pop()
        if (sortedArr.length === 0) {
            sortedArr.push(collectEle)
            console.log("first ele", sortedArr)
        } else {
            const compareArrayRes = compareArray(sortedArr, collectEle);
            const insertPos = getInsertPos(compareArrayRes);
            insertValue(sortedArr, insertPos, collectEle)
            console.log('compareArrayRes', compareArrayRes)
            console.log('insertPos', insertPos)
        }

        console.log('sortingArr', sortingArr)
        console.log('sortedArr', sortedArr, '\n')
    }
    return sortedArr
}

function compareArray(arr, compare) {
    return arr.map((ele) => {
        const result = ele - compare;
        // 1 means after
        // 0 means same site
        // -1 means before
        return (result > 0 ? -1 : result < 0 ? 1 : 0)
    })
}

function getInsertPos(arr) {
    if (arr.indexOf(0) >= 0) {
        return arr.indexOf(0)
    } else {
        return arr.indexOf(-1) > 0 ?  arr.indexOf(-1) : arr.lastIndexOf(1) + 1
    }
}

function getValPos(arr, val) {
    return arr.indexOf(e => e === val)
}

function insertValue(arr, pos, val) {
    arr.splice(pos, 0, val)
}
let a = [1, 2, 3, 4, 5]
insertValue(a, 3, 2)
console.log(sort([13, 1, 100, -1, 0, -200, 123, 10000, -123155]))
// console.log(sort(process.argv[2]))
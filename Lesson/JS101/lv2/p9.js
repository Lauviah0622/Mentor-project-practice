function findMin(arr) {
    return arr.reduce((pre, ele) => {
        return (pre > ele ? ele : pre)
    }, Infinity)
}

function findNMin(arr, i) {
    i = arr.length > i ? i : arr.length;
    const array = [...arr];
    let min = Infinity
    while (array.length >= (arr.length - (i - 1))) {
        const tempMin = findMin(array);
        const minIndex = array.findIndex(ele => ele === tempMin);
        removeMin(minIndex, array)
        min = tempMin;
    }
    return min
}

function removeMin(i, arr) {
    arr.splice(i, 1)
}


console.log(findNMin([1, 3, 5, 7, 9, 11, 13], 15)) 
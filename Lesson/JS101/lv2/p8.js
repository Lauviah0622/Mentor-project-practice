function findMin(arr) {
    return arr.reduce((pre, ele) => {
        console.log("pre", pre, "ele", ele)
        return (pre > ele ? ele : pre)
    }, Infinity)
}

console.log(findMin([1, 2, 3, 4, 5]))


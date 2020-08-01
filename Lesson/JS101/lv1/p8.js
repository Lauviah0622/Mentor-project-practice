function findSmallCount(arr, num) {
    const filtedArr = arr.filter((e) => {
        return e < num
    })

    let sum = 0
    for (e in filtedArr) {
        sum += filtedArr[e]
    }
    return sum;
}

console.log(findSmallCount([1, 2, 3, 4, 4, 5, 12, 3], 10))
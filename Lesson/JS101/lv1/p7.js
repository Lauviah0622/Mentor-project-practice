function findSmallCount(arr, num) {
    const filtedArr = arr.filter((e) => {
        return e < num
    })

    return filtedArr.length;
}

console.log(findSmallCount([1, 2, 3, 4, 4, 5, 12, 3], 3))
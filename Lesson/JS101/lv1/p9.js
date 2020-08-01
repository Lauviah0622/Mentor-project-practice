function findAllSmall(arr, num) {
    let filtedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) filtedArr.push(arr[i])
    }
    
    return filtedArr;
}

console.log(findAllSmall([1, 2, 3, 4, 4, 5, 12, 3], 10))
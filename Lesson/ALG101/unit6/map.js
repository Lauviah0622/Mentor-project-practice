function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        // console.log(i)
        result[i] = (callback(arr[i]))
    }
    return result
}

console.log(map([1, 2, 3, 4], x => x * 2))
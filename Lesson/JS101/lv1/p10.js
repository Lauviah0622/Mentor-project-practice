function findAllSmall(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    
    return sum;
}

console.log(findAllSmall([1, 2, 3, 4, 100, -1, 0, -100]))
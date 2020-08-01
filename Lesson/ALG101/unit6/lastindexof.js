function lastIndexof(arr, target) {
    let result = undefined;
    for (let i = arr.length - 1; i >= 0; i--) {
        const e = arr[i];
        if (e === target) result = e
    }
    return result || -1
}

console.log(lastIndexof([1, 2, 3, 4, 1, 4, 3], 10))
function flatArr(arr) {
    const flattenArr = [];
    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (isArray(ele)) {
            flattenArr.push(...flatArr(ele))
        } else {
            flattenArr.push(ele)
        }
    }
    return flattenArr
    
}

function isArray(arr) {
    return Array.isArray(arr)
}



console.log(flatArr([1, 2, [2, 3, 4], [5, 1]]))
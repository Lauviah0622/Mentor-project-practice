function swap(str) {
    return str.split('')
        .map(ele => {
            return ele.toUpperCase() !== ele ? ele.toUpperCase() : ele.toLowerCase()
        })
        .join('')
}

console.log(swap('Peter'))
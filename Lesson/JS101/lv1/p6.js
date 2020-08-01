function position(str) {
    let firstUpperCase = str.split('')
        .filter(a => a.toUpperCase() === a)[0]
    return `${firstUpperCase}: at ${str.indexOf(firstUpperCase) + 1}`

}


console.log(position('BtocsdgseeAAAAAAD'))

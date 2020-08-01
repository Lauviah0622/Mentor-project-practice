function reverse(str) {
    let rStr = [];
    for (let i = 0; i < str.length; i++) {
        let rIndex  = str.length - 1 - i;
        rStr.push(str[rIndex])
    }

    return rStr.join('')
}

console.log(reverse("rereasgerohb"))
function makeStars(num) {
    let stars = ''
    let starRow = '';

    for (let i = 1; i <= num * 2 - 1; i++) {
        if (i <= num) {
            starRow += '*';
        } else {
            starRow = starRow.slice(0, -1)
        }
        stars += starRow;
        stars += '\n'
    }
    return stars
}

console.log(makeStars(5))
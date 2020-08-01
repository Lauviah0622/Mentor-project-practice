function stars(num) {
    let starRow = '';

    for (let i = 1; i <= num; i++) {
        starRow += '*';
        console.log(starRow)

        console.log('\b')
    }
}

stars(5)
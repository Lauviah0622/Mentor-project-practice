function table99() {
    let ans = []
    let lonestStrLength = 0;
    for (let i = 1;i < 10; i++) {
        for (let j = 1;j < 10; j++) {
            let str = `${j} * ${i} = ${i * j}`;
            
            
            ans.push(str)
            lonestStrLength = str.length > lonestStrLength ? str.length : lonestStrLength;
        }
    }

    let lackSpace = (ele) => {
        let spaces = lonestStrLength - ele.length;
        let str = new Array(spaces).fill(' ').join('')
        return str
    }

    return ans.map((ele, i) => {
        // console.log(ele += lackSpace(ele))
        
        return ele += ((i + 1) % 9 === 0 ? lackSpace(ele) + '  \n' : lackSpace(ele) + '  ')
    }).join('')
}

console.log(table99())
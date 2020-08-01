let arr = [1, 2, 3]

let [a, b, c ,d = '123'] = arr
console.log({...{...[...arr]}}) //????
let {'0': obj, ...rest} = {...[...arr]}
console.log(obj, rest)
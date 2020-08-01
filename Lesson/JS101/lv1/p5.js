console.log("a", "a".charCodeAt())
console.log("z", "z".charCodeAt())
console.log("A", "A".charCodeAt())
console.log("Z", "Z".charCodeAt())

function isUpperCase(str) {
    let charCode = str.charCodeAt();
    console.log(charCode)
    return ((charCode <= 90) && (charCode >= 65))
}

console.log(isUpperCase('cbcd'))
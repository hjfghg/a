let fn = (num) => {
    let str = String(num)
    let sum = 0
    let arr = str.split('')
    arr.forEach((el) => sum += Number(el) ** arr.length)
    return num == sum && num > 0 ? true : false
}

console.log(fn(153)) //true
console.log(fn(7)) //true
console.log(fn(371)) //true
console.log(fn(1652)) //false
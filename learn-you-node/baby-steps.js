// process.argv
let nums = process.argv.slice(2).map(n => Number(n))
let res = nums.reduce((acc, curr) => acc + curr, 0)
console.log(res)
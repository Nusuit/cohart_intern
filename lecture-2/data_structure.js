// Data structure used: array, set

const numberToCheck = 1000000
const array = []

for (let i = 0; i < numberToCheck; i++) {
    array[i] = i
}

const set = new Set(array)
// set: Set { 0, 1, 2, 3, ... 100000 }
// array: [0, 1, 2, 3, ... 100000]

console.time('time to check if number is in array')
array.includes(numberToCheck)
console.timeEnd('time to check if number is in array')
// time to check if number is in array: 2.947ms

console.time('time to check if number is in set')
set.has(numberToCheck)
console.timeEnd('time to check if number is in set')
// time to check if number is in set: 0.016ms
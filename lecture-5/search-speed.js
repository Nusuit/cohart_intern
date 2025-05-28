/* Write a simple program to demonstrate the substantial difference of search speed of Array and Set data structure. */

const dataSize = 1000000;
const searchValue = dataSize - 1;

const largeArray = Array.from({ length: dataSize }, (_, i) => i)
const largeSet = new Set(largeArray)

let startTime = performance.now();
largeArray.includes(searchValue);
let endTime = performance.now();
console.log(`Array finds number ${searchValue} in ${endTime - startTime} ms`)

let startTimeSet = performance.now();
largeSet.has(searchValue);
let endTimeSet = performance.now();
console.log(`Set finds number ${searchValue} in ${endTimeSet - startTimeSet} ms`)
// Array finds number 999999 in 2.0283489990979433 ms
// Set finds number 999999 in 0.0063649993389844894 ms
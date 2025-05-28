const dataSize = 5
const searchValue = dataSize - 1;

const increasedArray = Array.from({ length: dataSize }, (_, i) => i);

console.log(increasedArray.length) // 1000000
const increasedMap = new Map(increasedArray.map(value => [value, value]));
console.log(increasedMap.size)

let timeStart = Math.round(performance.now());
increasedArray.includes(searchValue);
let timeEnd = Math.round(performance.now());
console.log(`Array need ${timeEnd - timeStart} to search ${searchValue}`);

let maptimeStart = Math.round(performance.now());
increasedMap.get(searchValue);
let maptimeEnd = Math.round(performance.now());
console.log(`Map need ${maptimeEnd - maptimeStart} to search ${searchValue}`);
/*
5
5
Array need 0 to search 4
Map need 0 to search 4
*/
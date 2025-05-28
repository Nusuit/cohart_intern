// How data looks like (print it out)
const arr = ['a', 'b', 4, 2, 'v']
console.log(arr) // [ 'a', 'b', 4, 2, 'v' ]

// How to insert/delete/access/search data
// Append a new element ( O(1) time complexity )
arr.push(100)
console.log(arr) // [ 'a', 'b', 4, 2, 'v', 100 ]

// Add element into random position ( 0(n) time complexity )
arr.splice(1, 0, 'Data Structure');
console.log(arr) // [ 'a', 'Data Structure', 'b', 4, 2, 'v', 100 ]

// Delete an element ( O(n) time complexity )
arr.splice(4, 1);
console.log(arr) // [ 'a', 'Data Structure', 'b', 4, 'v', 100 ]

// Access an element ( O(1) time complexity )
console.log(arr[2]) // 'b'

// Search an element ( O(n) time complexity )
const index = arr.indexOf('v');
console.log(index) // 4
console.log(arr.includes('v')) // true
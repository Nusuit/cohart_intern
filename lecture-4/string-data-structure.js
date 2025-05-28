// How data look like
let str = 'Today is a good day to learn DSA!'
console.log(str) //Today is a good day to learn DSA!

// How to insert/delete/access/search data
// insert
str = str + ' Welcome'
console.log(str) //Today is a good day to learn DSA! Welcome
console.log(str.concat(' to DSA track!')) //Today is a good day to learn DSA! Welcome to DSA track!

// Access
console.log(str[29]) //D
console.log(str.substring(29, 44)); //DSA! Welcome

// Search
console.log(str.includes('good day')); //true
console.log(str.includes('Today'));//true
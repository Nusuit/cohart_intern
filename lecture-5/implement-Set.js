const setA = new Set([1, 2, 'a', 'b'])
const setB = new Set([2, 3, 'b', 'c'])

setA.add(4);
console.log(setA) //Set(5) { 1, 2, 'a', 'b', 4 }

// Delete
setA.delete(1);
console.log(setA); //Set(4) { 2, 'a', 'b', 4 }

// Search
console.log(setA.has('a')); //true
console.log(setA.has('c')); //false
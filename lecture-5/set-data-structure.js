const setA = new Set([1, 2, 'a', 'b'])
const setB = new Set([2, 3, 'b', 'c'])

console.log(setA); //Set(4) { 1, 2, 'a', 'b' }
console.log(setB) //Set(4) { 2, 3, 'b', 'c' }

// Store unique elements / remove duplicate
const mylist = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = new Set(mylist);
console.log(uniqueElements) //Set(5) { 1, 2, 3, 4, 5 }

// Check the existance
const mySet = new Set([1, 2, 3, 4, 5]);
const isPresent = mySet.has(3);
console.log(isPresent) //true

// Execute calculation
const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet) //Set(5) { 1, 2, 3, 4, 5 }

// Intersection
const intersectionSet = new Set([...set1].filter(x => set2.has(x)));
console.log(intersectionSet) //Set(1) { 3 }

// Difference
const differenceSet = new Set([...set1].filter(x => !set2.has(x)));
console.log(differenceSet) //Set(2) { 1, 2 }

// Symmetric Difference
const symmetricDifferenceSet = new Set([...set1].filter(x => !set2.has(x)).concat([...set2].filter(x => !set1.has(x))));
console.log(symmetricDifferenceSet) //Set(4) { 1, 2, 4, 5 }

// Count unique element
const data = ["apple", "banana", "orange", "banana", "orange", "mango"];
const uniqueCount = new Set(data).size;
console.log(uniqueCount) //4

function union(setA, setB) {
    let _union = new Set(setA);
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union;
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection
}

// union
console.log(union(setA, setB)) //Set(6) { 1, 2, 'a', 'b', 3, 'c' }

// intersection
console.log(intersection(setA, setB)) //Set(2) { 2, 'b' }


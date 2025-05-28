/* Find4: Given an array of random integer, example: [2, 4, 5, 1, 6],
 and a random sum, example: 13. Write a function to return 4 numbers that their 
 combination equals to the sum, example: [2, 4, 1, 6]. */

let arr = [2, 4, 5, 1, 6]
let target = 13;
// Measure 1: 4 loops O(n^4)
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            for (let l = k + 1; l < arr.length; l++) {
                if (arr[i] + arr[j] + arr[k] + arr[l] === target) console.log(arr[i], arr[j], arr[k], arr[l]);
            }
        }
    }
}
/*
Flow:[2, 4, 5, 1, 6]
    2 + 4 + 5 + 1 = 12 (false)
    2 + 4 + 5 + 6 = 17 (false)
    2 + 4 + 1 + 6 = 13 (true)
    2 + 5 + 1 + 6 = 14 (false)
    4 + 5 + 1 + 6 = 16 (false)
Result: 2 4 1 6
*/

// Measure 2: Sorting and 2 pointers O(n^3)
// Step 1: sorting
/* Explanation: https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity
Normally sort function will convert number into string and sort by alphabet which is '2' compared to '4' (wrong)
When using arrow function, it will return a - b. Ex: compare 2 and 4, return 2 - 4 = -2 (<0) => 4 > 2 (true)
In my opinion, it has some common with QuickSort because of the 0 pivot. And QuickSort uses (a,b) => a-b to compare 2 elements.
But QuickSort can choose the pivot while Sort function uses the default rule.
 
I have searched in Stackoverflow the complexity of sort function and there is a common:
Firefox uses merge sort. Chrome, as of version 70, uses a hybrid of merge sort and insertion sort called Timsort.
The time complexity of merge sort is O(n log n). While the specification does not specify the sorting algorithm to use, in any serious environment, you can probably expect that sorting larger arrays does not take longer than O(n log n) (because if it did, it would be easy to change to a much faster algorithm like merge sort, or some other log-linear method).
While comparison sorts like merge sort have a lower bound of O(n log n) (i.e. they take at least this long to complete), Timsort takes advantages of "runs" of already ordered data and so has a lower bound of O(n).
*/
/* 
    Input: an array
    Process: Sorting, uses left and right to calculate whether it's small or bigger than target and change the left right element if needed
    Output: sum of 4 number = target. 
*/
arr.sort((a, b) => a - b);
console.log(arr);
// Step 2: Search
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let left = j + 1;
        let right = arr.length - 1;
        if (arr[i] + arr[j] + arr[left] + arr[right] === target) console.log(arr[i], arr[j], arr[left], arr[right])
        else if (arr[i] + arr[j] + arr[left] + arr[right] < target) left++;
        else if (arr[i] + arr[j] + arr[left] + arr[right] > target) right--;
    }
}
/*
Flow:[1, 2, 4, 5, 6]
    1 + 2 + 4 + 6 = 13 (true)
Result: 1 2 4 6
*/



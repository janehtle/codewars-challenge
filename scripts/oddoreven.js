// (Level 7kyu) Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(array) {
    if (Array.isArray(array) && array.length === 0);

    let sum = 0;
    array.forEach(function(element) {
        sum += element;
    })

    if (sum % 2 === 0) {
        return "Even";
    } else if (sum % 2 === 1) {
        return "Odd";
    } 
}

console.log(oddOrEven([])); //Outputs: [0] Even, how do I get rid of Even?
console.log(oddOrEven([1, 3, 2, 2])); //sum = 8, Output: Even
console.log(oddOrEven([1, 5, 2, 5])); //sum = 13, Output: Odd
console.log(oddOrEven([0])); //Output: Even


// (Level 7kyu) In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(str) {
    const newStr = str.split(" ").map(Number);

    let highest = newStr[0];
    let lowest = newStr[0];

    for (let i = 1; i < newStr.length; i++) {
        if (newStr[i] > highest) {
            highest = newStr[i];
        } 
    } 

    for (let i = 1; i < newStr.length; i++) {
        if (newStr[i] < lowest) {
            lowest = newStr[i];
        } 
    }

    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 0 8 9 5"));


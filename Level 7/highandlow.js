// (Level 7kyu) In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(str) {
    const newStr = str.split(" ").map(Number); //split the characters in the str to individual pieces and turn each one into numbers

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

console.log(highAndLow("1 2 3 4 5")); //Output: 5 1
console.log(highAndLow("1 0 8 9 5")); //Output: 9 0




//Thoughts
//This problem was actually similar to the coding problem Nia gave Alex and I during whiteboarding practice, so I applied the same answer
//that I wrote during the practice, but it initially did not provide the output I wanted. I was also struggling initially with split
//because I was unsure of what to put in the parentheses because, again, it was not outputting what I wanted. I googled my issue and it
//stated that I was trying to actually return numbers and not a string so I had to convert it. Did it answer my problem regarding the .split()?
//That I am not sure, but it works now so bless.

// (Level 8kyu) Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

function gimmieFive() { //func that will always return the number 5 when called
    const word = "Jazer";
    const five = word.length;

    return five;
}

console.log(fiveForLife()); //Output: 5, every time this function is called


function fiveForLife(x) { //func that will always return the number 5, regardless of what the input is
    x = "Mason";
    const five = x.length;

    return five;
}

//testing with different data types as arguments
console.log(fiveForLife([0, 1, 2]));
console.log(fiveForLife("Niaria"));
console.log(fiveForLife(6));
console.log(fiveForLife(true));



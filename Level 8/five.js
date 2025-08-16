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




//Thoughts
//Very easy, but it didn't occur to me that I literally couldn't use any numbers, including the number 5. So shoutout to one of my peers
//that pointed that out and clarified it to me, because I was going to run right through this thinking I was a master coder. I also
//provided two ways of doing it or where one function accepts a parameter and another doesn't because I wasn't sure which one it actually
//wanted me to do or if it was free game.
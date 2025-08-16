// (Level 6kyu) Write a function that takes in a string of one or more words, and returns the same string, 
// but with all words that have five or more letters reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"


function spinningWords(str) {
    
    const splitStr = str.split(" "); //Output: [ 'hi', 'my', 'name', 'is', 'marlette' ]

    const mapStr = splitStr.map((word) => {
        if (word.length >= 5) {
            return word.split("").reverse().join("");
        }
        return word; //return the word back if its not >= 5 in length, wondering why undefined for output
    });              //Output: [ 'hi', 'my', 'name', 'is', 'ettelram' ]

    const newStr = mapStr.join(" "); //unsplit it

    return newStr; 
}

console.log(spinningWords("hi my name is marlette")); //Output: hi my name is ettelram
console.log(spinningWords("Jane learns from Latori")); //Output: Jane snrael from irotaL




//Thoughts
//Writing this part before I even get past the initializing only to realize this problem is basically the challenge Janaya gave us a
//few days ago where we struggled for what seemed like 2 hours. I'm actually going to cry because I can't remember what we did or if it
//was even correct, that day was so stressful. But (un)fortunately I am someone who wants to challenge myself so here I am trying again.

//I DID IT OH MY GOD. There was a shortcut way I had seen a while back where it was a ternary operator. I tried it out but it either
//didn't work and if it did I didn't understand how. Preferred to break it down into a larger expression so I could understand the process
//behind the shortcut version. I think in the function I could've gotten away with:

        //return str.split(" ").map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(" ");
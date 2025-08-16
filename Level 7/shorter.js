// (Level 7kyu) Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function shorter(...str) { //doesn't specify it being an array so trying out func that'll accept an indefinite # of params
    
    console.log(str.map((string) => { //just want to see the length of each str input
        return string.length;
    })); 

    let shortestWord = str[0];

    for (i = 1; i < str.length; i++) {
        if (str[i].length < shortestWord.length) {
            shortestWord = str[i];
        }
    }

    return shortestWord.length;
}

console.log(shorter("Jordan", "Mason", "Marlette", "Rj")); //Output: 2 
console.log(shorter("ana", "Mason", "Marlette", "khang")); //Output: 3





//Thoughts
//Tried to replicate an answer from a previous problem but it didn't work the way I wanted it to. Additionally, I was stumped on the part
//where the function accepted multiple params but it wasn't an array so I had to figure out what that looked like because Alex and Nia
//said that if the function had no params declared at the initial declaration, it meant that it could accept anything and however many things
//which was not correct. I utilized console.log to see how my code works, which I don't do often actually (not a fan and I suck at debugging),
//but I tried it for this and it helped me visualize and see where I could go from there in terms of solving the rest of the code.
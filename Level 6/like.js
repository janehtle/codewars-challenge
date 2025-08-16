// (Level 6kyu) You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function like(array) {

    if (!array || array.length === 0) {
        return "No one likes this";
    } else {
        switch(array.length) {
            case 1:
                return `${array[0]} likes this`;
                // break;
            case 2:
                return `${array[0]} and ${array[1]} like this`;
                // break;
            case 3:
                return `${array[0]}, ${array[1]}, ${array[2]} like this`;
                // break;
            case 4: 
                return `${array[0]}, ${array[1]} and 2 others like this`;
                // break;
            default:
                return `${array[0]}, ${array[1]} and ${array.length - 2} others like this`;
            }
    }
}

console.log(like([]));
console.log(like(["Nia"]));
console.log(like(["Justin", "Dakota", "Mike"]));
console.log(like(["Teh", "Marlette"]));
console.log(like(["Ana", "Kev", "Eddie", "Imran"]));
console.log(like(["Ana", "Kev", "Eddie", "Imran", "Jane", "Mike"]));




//Thoughts
//I used switch case in this scenario since I felt like it would be most appropriate and also because the task made me think of my RPS
//challenge where I used this so I decided I should try it out. It took me a while to figure out why break; didn't work, so I assumed
//it was because I used return and according to Google, that was the case. I also felt silly sitting here for a long time trying to
//figure out why it wasn't returning the template literals and only my input, it was because I didn't even actually call the function.
//I swear its little things like this that really test me and make me re-evaluate my life sometimes. But overall, I'm pretty happy it 
//worked out as I do enjoy using switch case.


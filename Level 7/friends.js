// (Level 7kyu) Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.


function realFriends(array) {

    const friends = array.filter(function(element) {
        if (typeof element === 'string' && element.length === 4) {
            return element;
        }
    })

    return friends;
}

console.log(realFriends(["jane", "nia", "alex", "izzy", 999])); //Output: ["jane", "alex", "izzy"]
console.log(realFriends([true, "nia", "teh", "madison", 999])); //Output: []




//Thoughts
//The interesting thing about this problem is that I saw a vision already on how to solve this, but when it came down to coding it
//and seeing the different possibilities, it didn't work. Well, it did, but it wasn't providing the correct output as shown in the
//examples. So what made this interesting to me, as I stated initially, was that given the fact that I am a simple person, that likes
//simple code and simple things, I thought... let's just keep it simple. So I wrote a function that, not only did what it was supposed to
//do, but I just went for the most basic, simple piece of writing imaginable and lord and behold. What took me an hour, I just solved within
//less than 5 minutes after going with this approach. It also made me think that when it comes to whiteboarding practice, I see my peers,
//including myself, overthink when really... it must actually be that simple!
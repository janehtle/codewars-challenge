// (Level 7kyu) ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  //return true or false
    if (typeof pin !== "string") { //checks to make sure pin is a str type
        return "PIN must be a STRING type. Please re-enter.";
    }

    if (pin.length === 4 || pin.length === 6) { //checks if pin has exactly 4 digits OR 6 digits ONLY
        return true; 
    }
    return false;
}

console.log(validatePIN(6666)); //Output: PIN must be a STRING type. Please re-enter.
console.log(validatePIN("6666")); //Output: true, 4 digits
console.log(validatePIN("666a6")); //Output: false, 5 digits
console.log(validatePIN("p666a6")); //Output: true, 6 digits

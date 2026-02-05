// Variables
let age = 25;
const name = "Donovan";

//Function
function greet(user) {
    return "Hello, " + user;
}

//Conditionals
function canVote(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

// Loops
function countToFive() {
    for (let i = 1; i <=5; i++) {
        console.log(i);
    }
}

// isEven
function isEven(a) {
    return a % 2 === 0;
}

// add
function add(a, b) {
    return a + b;
}

//Largest number
function largest(a, b) {
return a > b ? a : b;
 }
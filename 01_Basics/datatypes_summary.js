// Primitive

    //  7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference (Non Primituve)

    // Array, Objects, Functions

    // https://262.ecma-international.org/5.1/#sec-11.4.3
    

// ****************************************************************
// Memory in JavaScript

// Stack (Premetive)

let name1 = "shriyanshu"

let name2 = name1
name2 = "Naik" // it gets the copy of the original which is changed here

console.log(name1)
console.log(name2)

// Heap (Non-Prementive)

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="shriyasnhu@gmail.com" // this changes the reference itself

console.log(userOne)
console.log(userTwo)


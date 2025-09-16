"use strict";

// Primitive types
const score = 200;
const averageScore = 98.7;
const isMember = true;
const currentTemp = null;
let userEmail;

console.log(typeof userEmail);
console.log(typeof currentTemp);
console.log(typeof averageScore);

// Symbol
const userId = Symbol("101");
const anotherUserId = Symbol("101");
console.log(userId === anotherUserId);
const largeNumber = 999999999999999;
console.log(typeof largeNumber);

const largeNumberBigInt = 9999999999999999n;
console.log(typeof largeNumberBigInt);
const cartoons = ["Pokemon", "Naruto", "Tom&Jerry"];
console.log(cartoons);
console.log(cartoons[1]);

// Object
let userProfile = {
    username: "Poushie",
    age: 21
};
console.log(userProfile);

// Function
const greet = function() {
    console.log("Hello Poushie!");
};
console.log(typeof greet);

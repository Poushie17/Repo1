"use strict";

const name = "poushie";
const repoCount = 25;

// String interpolation (modern way)
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("poushie-sc-com");


console.log(gameName.charAt(2));  
console.log(gameName.indexOf("s")); 
// Substring vs Slice
const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-7);   
console.log(anotherString);

// Trim spaces
const newStringOne = "   poushie   ";
console.log(newStringOne);         
console.log(newStringOne.trim());  


const url = "https://poushie.com/poushie%20tanzine";
console.log(url.replace("%20", "-"));

// Includes check
console.log(url.includes("connect")); 
console.log(url.includes("random")); 

// Split string
console.log(gameName.split("-")); 

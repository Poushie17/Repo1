
const hasAccount = true
const tempCelsius = 39


if (tempCelsius === 39) {
    console.log("Temperature is normal range");
} else {
    console.log("Temperature is unusual");
}

console.log("Check complete");

// Example 2: Player score
const playerScore = 150

if (playerScore >= 120) {
    let ability = "invisibility"
    console.log(`Unlocked ability: ${ability}`);
}

// console.log(`Unlocked ability: ${ability}`); // This would throw an error

const wallet = 850

if (wallet > 700) console.log("Balance healthy"), console.log("Proceed to checkout");

if (wallet < 500) {
    console.log("Low funds");
} else if (wallet < 800) {
    console.log("Mid-range funds");
} else {
    console.log("High balance");
}

// Example 4: Authentication
const signedIn = true
const hasPaymentMethod = false
const loggedWithFacebook = false
const loggedWithPhone = true

if (signedIn && hasPaymentMethod && 5 > 2) {
    console.log("Access to premium features granted");
}

if (loggedWithFacebook || loggedWithPhone) {
    console.log("User successfully authenticated");
}

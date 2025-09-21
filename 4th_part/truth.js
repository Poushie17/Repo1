const friendsList = []

if (friendsList) {
    console.log("We got )");
} else {
    console.log("No friends list found");
}


if (friendsList.length === 0) {
    console.log("No friends added yet");
}

const profile = {}

if (Object.keys(profile).length === 0) {
    console.log("Profile details missing");
}


let username;

// username = "poushie" ?? "guest"
// username = null ?? "guest"
username = undefined ?? "guest"

console.log(username); 
const snackPrice = 120
snackPrice < 100 
    ? console.log("Budget snack") 
    : console.log("Kinda pricey");

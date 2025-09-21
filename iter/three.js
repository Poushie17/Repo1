
const scores = [10, 20, 30, 40, 50];

for (const score of scores) {
    // console.log(`Score: ${score}`);
}

const message = "Hi there!";
for (const char of message) {
    // console.log(`Character: ${char}`);
}


const countryCodes = new Map();
countryCodes.set('BD', "Bangladesh");
countryCodes.set('US', "United States");
countryCodes.set('FR', "France");
countryCodes.set('BD', "Bangladesh"); 

for (const [code, country] of countryCodes) {
    // console.log(`${code} => ${country}`);
}


const games = {
    racing: "Need for Speed",
    adventure: "Spiderman"
};


for (const key of Object.keys(games)) {
    // console.log(`${key} => ${games[key]}`);
}

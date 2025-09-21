
const languages = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

for (const key in languages) {
    // console.log(`The shortcut '${key}' stands for ${languages[key]}`);
}

const favoriteLanguages = ["js", "rb", "py", "java", "cpp"];

for (const index in favoriteLanguages) {
    // console.log(`Language at index ${index} is ${favoriteLanguages[index]}`);
}

const countries = new Map();
countries.set('IN', "India");
countries.set('US', "United States");
countries.set('FR', "France");

// Correct way to loop over a Map
for (const [code, country] of countries) {
    // console.log(`${code} => ${country}`);
}

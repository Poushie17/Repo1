
const codingLanguages = ["JavaScript", "Ruby", "Java", "Python", "C++"];


codingLanguages.forEach(language => {
    // console.log(language);
});


function showLanguage(lang) {
    // console.log(lang);
}
codingLanguages.forEach(showLanguage);
codingLanguages.forEach((lang, idx, arr) => {
    // console.log(`Language ${idx + 1}: ${lang}`, arr);
});


const languageDetails = [
    { name: "JavaScript", file: "js" },
    { name: "Java", file: "java" },
    { name: "Python", file: "py" }
];

languageDetails.forEach(lang => {
    console.log(`Language: ${lang.name} (File: ${lang.file})`);
});

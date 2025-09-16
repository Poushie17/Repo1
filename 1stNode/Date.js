let current = new Date();

let customDate = new Date("06-10-2024");

let timeNow = Date.now();

let today = new Date();
console.log(today);
console.log(today.getMonth() + 1);
console.log(today.getDay());

let fullDay = today.toLocaleString("default", { weekday: "long" });
console.log(`Today is ${fullDay} and the time is ${today.toLocaleTimeString()}`);

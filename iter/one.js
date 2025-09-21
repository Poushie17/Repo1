
for (let i = 0; i <= 10; i++) {
    if (i === 7) {
        // console.log("7 is my lucky number!");
    }
    // console.log(`Current number: ${i}`);
}

// Nested loops: multiplication table style
for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
        // console.log(`${row} x ${col} = ${row * col}`);
    }
}

let superheroes = ["Ironman", "Thor", "Hulk"];
for (let i = 0; i < superheroes.length; i++) {
    const hero = superheroes[i];
    // console.log(hero);
}


for (let page = 1; page <= 15; page++) {
    if (page === 6) {
        console.log("Page 6 reached, stopping the scan!");
        break;
    }
    // console.log(`Scanning page: ${page}`);
}

// Continue example
for (let page = 1; page <= 10; page++) {
    if (page === 3) {
        console.log("Skipping page 3");
        continue;
    }
    console.log(`Reading page: ${page}`);
}

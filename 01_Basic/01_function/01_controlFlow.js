const month = 3;
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;

//     default:
//         console.log("Invalid month");
//         break;
// }

// const emptyObject = {}
// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object is empty");
// }
// ----------------------------------------------------------------------

// let myArray = ["apple", "banana", "cherry"];
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

// let myHeroes = ["Superman", "Batman", "Wonder Woman"];
// let index = 0;
// while (index < myHeroes.length) {
//     const hero = myHeroes[index];
//     console.log(hero);
//     index++;
// }

// let score = 1;
// do {
    // console.log(`Your score is ${score}`);
    // score++;
// } while (score <= 10);

// const greetings = "Hello World!";
// for (const char of greetings) {
//     console.log(`Character: ${char}`);
//     console.log(char);
// }

const map = new Map();
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObject = {
    "game": "Football",
    "player": "Messi",
    "team": "PSG"
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ":-", value);
}

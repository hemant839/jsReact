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

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");

// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }

const myObject = {
    "game": "Football",
    "player": "Messi",
    "team": "PSG"
}

// for (const [key, value] of Object.entries(myObject)) {
//     console.log(key, ":-", value);
// }

// for (const key in myObject) {
//     console.log(key, ":-", myObject[key]);   
// }

const myArray = ["apple", "banana", "cherry", "date", "elderberry"];

// myArray.forEach( function(element) {
//     console.log(element);
// });

// myArray.forEach( (element, index, array) => {
//     console.log(element, index, array);
// });

const myCoding = [
    {
        language: "JavaScript",
        difficulty: "Medium",
        languageFeatures: ["ES6", "Async/Await", "Closures"]
    },
    {
        language: "Python",
        difficulty: "Hard",
        languageFeatures: ["OOP", "Functional Programming", "Data Structures"]
    },
    {   
        language: "Java",
        difficulty: "Hard",
        languageFeatures: ["OOP", "Multithreading", "Networking"]
    }
]

// myCoding.forEach( (element) => {
//     console.log(`Language: ${element.language}`);
//     console.log(`Difficulty: ${element.difficulty}`);
//     console.log(`Language Features: ${element.languageFeatures.join(", ")}`);
//     console.log("-------------");
// });


const muNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* using forEach loop */
// const evenNums = [];
// muNums.forEach( (num) => {
//     if (num % 2 === 0) {
//         evenNums.push(num);
//     }
// });
// console.log(evenNums);

/* Using filter */
// const evenNums = muNums.filter( (num) => num % 2 === 0);
// const evenNums2 = muNums.filter( function(num) {
//     return num % 2 === 0;
// });
// console.log(evenNums);
// console.log(evenNums2);


/* Using examples of books to get their titles */
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925, edition: 2003 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960, edition: 2006 },
    { title: "1984", author: "George Orwell", published: 1948, edition: 2008 },
    { title: "Pride and Prejudice", author: "Jane Austen", published: 1813, edition: 1985 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", published: 1951, edition: 2001 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", published: 1954, edition: 2004 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", published: 1937, edition: 1999 },
    { title: "Moby Dick", author: "Herman Melville", published: 1851, edition: 2000 },
    { title: "War and Peace", author: "Leo Tolstoy", published: 1869, edition: 2003 },
    { title: "The Odyssey", author: "Homer", published: 1890, edition: 2001 }
];

const bookTitles = books.filter( (book) => book.edition < 2000 );
const bookTitles2 = books.filter( (book) => book.published < 2000 && book.edition < 2000 );
// console.log(bookTitles);
// console.log(bookTitles2);

// const myNums = muNums.map( (num) => {
//     return num * 2;
// });
// console.log(myNums);


// const doubledNums = muNums.map( (num) => num * 2 );
// console.log(doubledNums);

const myTotal = muNums.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0);
console.log(myTotal);
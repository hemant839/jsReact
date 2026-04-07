function greet(params) {
    return `${params} is a goodboy`
}
// console.log(greet("Hemant"));

let a = 300;
if (true) {
    let a = 400;
    // console.log(a);
}
// console.log(a);

function one() {
    const name = "Hemant";
    function two() {
        const website = "Youtube";
        console.log(name);
    }
    console.log(website);   
    // two();
}
// one();

let user = {
    name: "Hemant",
    price: 300,

    welcomeMessage: function () {
        console.log(`Welcome ${this.name} to our website`);
        console.log(this);
    }
}
// user.welcomeMessage();

const chai = () => {
    console.log("I am a chai function");
    let name = "Hemant";
    console.log(this);
}
// chai();

// const obj = (num1, num2) => {
//     return num1 + num2;
// }

// const obj = (num1, num2) => num1 + num2;

const obj = (num1, num2) => ({username:"Hemant"});
console.log(obj(4, 5));




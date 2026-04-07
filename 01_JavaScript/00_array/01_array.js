//console.log("Hemant");

// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const bal = 123.8956
// console.log(bal.toPrecision(4));

// const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

/* console.log(Math.random());
 console.log((Math.random()*10) +1);
 console.log(Math.floor(Math.random()*10) +1);

 const min = 10
 const max = 20
 console.log(Math.floor(Math.random() * (max - min + 1)) + min); */

//++++++++++++++++++++++++++++++++++++ DATE +++++++++++++++

let myDate = new Date();
console.log(myDate.toDateString());

let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());

const myArr1 = new Array("hement","Ila")  
//console.log(myArr1[1])

const myArr = [1,2,3,4,5]
// myArr.push(6,7);

const newArr = myArr.join()
// console.log(newArr);

const myArr2 = myArr.slice(1, 3)
const myArr3 = myArr.splice(1, 3)
// console.log(myArr);
// console.log(myArr2);
// console.log(myArr3);

const myHero = ["ila","putu","babu"]
const myheroine = ["babu1","binu","gota"]

const all_hero = [...myHero, ...myheroine]
console.log(all_hero);
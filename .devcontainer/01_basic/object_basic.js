//Singleton ->  Object.create

//object literals

const mySym = Symbol("Key1")
const JsUser = {
    name: "Hemant",
    age: 27,
    [mySym]: "myKey1",
    "full name": "Hemant Kumar",
    location: "Bangalore",
    email: "hemant@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}

//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Hemant")    
}
JsUser.greetingtwo = function() {
    console.log(`Hello Hemant, your age is ${this.age}`)    
}
//console.log(JsUser.greeting());
//console.log(JsUser.greetingtwo());
//----------------------------------Singleton------------

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "HemantK"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "hemant@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hemant",
            lastname: "Kumar"
        }
    }
}
//console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

const course = {
    courcename: "AWS",
    price: "9999",
    courseInstructor: "Hemant"
} 
const {courseInstructor: instructor} = course
console.log(instructor);








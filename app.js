// console.log(typeof null);
// console.log(typeof Number("Nikhil"));
// console.log(NaN === NaN);
// console.log(Number.isNaN("hello"));
// console.log(Number.isNaN(NaN));
// console.log(typeof("5"+2));
// console.log(5 + "2");


// let age = "23";
// if(!isNaN(age)){
//     console.log("Hi");
// }

// const a = {};
// const b = a;
// console.log(a === b);
// console.log(a);
// console.log(b);


// console.log(x);
// var x = 10;

// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Nikhil");

// let funcc = function(name){
//     console.log("Hello " + name);
// };
// funcc("Nikhil");


// function executeTask(anything){
//     anything();
// }
// function sayHello(){
//     console.log("Nikhil");
// }
// executeTask(sayHello);


// let x = (a,b) =>{
//     return a+b;
// }
// console.log(x(4,4));


// const obj = {
//     name : "Nikhil",
//     introducing : function(){
//         console.log("Hi " + this.name);
//     }
// }
// const obj2 = {
//     name : "Dhiman",
//     introducing : obj.introducing
// }
// obj.introducing();
// obj2.introducing();

// console.log(this);


// const person = {
//     name : "atul",
//     greet : function() {
//         console.log("hello" + this.name);
//     }
// }
// person.greet();

// function greet(name = "Default"){
//     console.log("Hello " + name);
// }
// greet("s");


// function multiply(a, b) {
//   return a * b;
// }
// multiply(4, 5);
// console.log(multiply(4, 5));


// const marks = [1,2,3,4,5];
// console.log(marks[0]);
// console.log(marks.at(-1));

// marks[2] = 10;
// console.log(marks);

// marks.push("Pushed");
// console.log(marks);

// marks.unshift("Unshift");
// console.log(marks);

// for(const mark of marks){
//     console.log(mark);
// }

// marks.forEach((curr_mark,idx) => {
//     console.log("Index = " + idx + " Element = " + curr_mark);
// })

// const marks2 = [10,20,30];
// const updatedMarks2 = marks2.map(val => val+10);
// console.log(updatedMarks2);
// console.log(marks2);

// const passed = updatedMarks2.filter(mark => mark >= 30);
// console.log(passed);
// console.log(updatedMarks2);
// updatedMarks2.push(45);
// console.log(updatedMarks2);
// console.log(updatedMarks2.find(mark => mark>31));


// const obj = {
//     name: "Nikhil",
//     age : 21
// }
// const temp = "name";
// console.log(obj.name);
// console.log(obj[temp]);
// console.log(obj.city?.pinCode);

// const {name,age} = obj;
// console.log(name);
// console.log(age);

// const {name:newName} = obj;
// console.log(newName);

// console.log(obj);
// const {city = "Missing"} = obj;
// console.log(city);


// console.log(obj);
// const first = {...obj};
// first.age = 23;
// console.log(first.age);

// const second = {
//     ...obj,
//     age : 25
// }
// console.log(second.age);


// const obj3 = {
//     name : "Nikhil",
//     age : 21
// };
// const obj3_json = JSON.stringify(obj3);
// console.log(obj3_json);

// const obj3_duplicate = JSON.parse(obj3_json);
// console.log(obj3_duplicate);

// --Closures
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const result = createCounter();
// result();
// result();
// result();


// function createBankAccount(){
//    let balance = 50;
//    return {deposit(amount){
//     balance += amount;
//    },
//    getBalance(){
//     return balance;
//    }
// }
// }
// const account = createBankAccount();
// account.deposit(500);
// console.log(account.getBalance());

// --Promises
// const myPromise = new Promise((resolve,reject) => {
//     let a = true;
//     if(a){
//         resolve("Resolved Successfully.");
//     }
//     else{
//         reject("Rejected!.");
//     }
// })
// myPromise.catch(result => {
//     console.log(result);
// })
// .then(result => {
//     console.log(result);
// })

// function fetchUser(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {resolve({
//             id : 1,
//             name : "Nikhil"
//         })
//     },2000)
//     }
//     )
// }
// fetchUser().then(result => {
//     console.log(result.id);
//     console.log(result.name);
// });
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

function greet(name = "Default"){
    console.log("Hello " + name);
}
greet("s");


function multiply(a, b) {
  return a * b;
}
multiply(4, 5);
console.log(multiply(4, 5));


const marks = [1,2,3,4,5];
console.log(marks[0]);
console.log(marks.at(-1));
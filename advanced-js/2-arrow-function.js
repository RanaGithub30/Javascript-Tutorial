/**
 * Arrow functions, introduced in ES6, provide a shorter syntax for writing functions in JavaScript. 
 * They are particularly useful in situations where you want to write concise and readable code. 
 * Here’s a basic overview and some examples.
*/

/* 
  Example -1
  --------------- 

  to add tow numbers we can write a traditional function like below
*/

function add(a,b){
     return (a+b);
}

// The above function can be shorter by arrow function like below

let add = (a,b) => a+b;
console.log(add(3, 4)); // 7


/* 
  Example -2
  --------------- 

  to multiply 3 numbers we can write a traditional function like below
*/

function multiply(a,b,c){
    return a*b*c;
}

// Arrow function

let multiply = (a,b,c) => (a*b*c);
console.log(multiply(3, 4, 5)); // 60

/* 
  Example -3
  --------------- 

  Arrow Function Without Parameters
*/

let funWithoutParam = () => console.log('Hello, World!');
funWithoutParam(); // 'Hello, World!'
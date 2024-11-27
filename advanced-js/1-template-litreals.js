/**
 * Template literals, introduced in ECMAScript 6 (ES6), provide a convenient way to work with strings in JavaScript. 
 * They allow you to embed expressions and multiline strings directly within backticks (`).
 * 
*/

let name = "Test";
let age = "32";
let marks = "75";

function templateLit(name, age, marks){
    let combinedString = `${name}, whose age is ${age} obtain a marks of ${marks}`;
    return combinedString;
}

console.log(templateLit(name,age,marks));

// here ${name} is known as TEmplate literals
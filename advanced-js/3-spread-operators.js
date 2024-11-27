/**
 * The spread operator (...) in JavaScript is a powerful feature that allows you to expand elements of an iterable 
 * (like an array or object) into individual elements. It’s commonly used for making copies of arrays or objects, 
 * combining arrays or objects, and in function calls.
*/

// Example - 1 (Copying an Array)
// -----------------------------------------------

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

console.log(copiedArray); // Outputs: [1, 2, 3]

// Modifying the copied array does not affect the original array
copiedArray.push(4);
console.log(copiedArray);    // Outputs: [1, 2, 3, 4]
console.log(originalArray);  // Outputs: [1, 2, 3]

// ------------------------------------------------
// Example - 2 (Combining Arrays)
// ----------------------------------------------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Outputs: [1, 2, 3, 4, 5, 6]

// ------------------------------------------------
// Example - 3 (Adding Elements to an Array)
// ----------------------------------------------

const initialArray = [3, 4, 5];

// Adding elements at the beginning
const newArray = [1, 2, ...initialArray];
console.log(newArray); // Outputs: [1, 2, 3, 4, 5]

// Adding elements in the middle
const anotherArray = [0, ...initialArray, 6];
console.log(anotherArray); // Outputs: [0, 3, 4, 5, 6]

// ------------------------------------------------
// Example - 4 (Copying an Object)
// ----------------------------------------------

const originalObject = { a: 1, b: 2 };
const copiedObject = { ...originalObject };

console.log(copiedObject); // Outputs: { a: 1, b: 2 }

// Modifying the copied object does not affect the original object
copiedObject.c = 3;
console.log(copiedObject);   // Outputs: { a: 1, b: 2, c: 3 }
console.log(originalObject); // Outputs: { a: 1, b: 2 }


// ------------------------------------------------
// Example - 5 (Merging Objects)
// ----------------------------------------------

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject); // Outputs: { a: 1, b: 3, c: 4 }

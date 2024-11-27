/**
 * In JavaScript, both Object.freeze() and Object.seal() are used to control the mutability of objects, 
 * but they work in slightly different ways. Here's a detailed comparison of the two:
*/

// Object.freeze()

/**
 * Object.freeze() makes an object completely immutable. This means:
 * 
 * a) You cannot add, remove, or modify any properties of the object.
   b) The object becomes fully read-only.
   c) The properties of the object (if they are objects themselves) are only shallowly frozen (i.e., nested objects are not deeply frozen).
*/

const obj = {
    name: "John",
    age: 30
};

Object.freeze(obj);

// Attempting to modify properties
obj.age = 35; // Will not change the age
obj.gender = "male"; // Cannot add new properties
delete obj.name; // Cannot delete properties

console.log(obj); 
// Outputs: { name: "John", age: 30 } (unchanged)

// --------------------------------------------------------------------------------------------


/**
 * Object.seal()
 * -------------------------
 * 
 * 
 * Object.seal() makes an object partially immutable. This means:
 * 
 * a) New properties cannot be added, and existing properties cannot be removed.
 * b) However, you can still modify the values of existing properties.
 * 
 * c) Similar to Object.freeze(), it only seals the object at the shallow level, so nested objects remain mutable.
*/

const obj = {
    name: "Alice",
    age: 25
};

Object.seal(obj);

// Attempting to modify properties
obj.age = 28; // Modifying an existing property (this works)
obj.gender = "female"; // Cannot add new properties
delete obj.name; // Cannot delete properties

console.log(obj);
// Outputs: { name: "Alice", age: 28 } (age was updated)
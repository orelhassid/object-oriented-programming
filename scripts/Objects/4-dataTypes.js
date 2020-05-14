// In JavaScript we have two categories of types

// Value Types (Primitives)
/**
 * Number
 * String
 * Boolean
 * Symbol (new in ES6)
 * undefined
 * null
 */

// Reference Types
/**
 * Object
 * Function
 * Array
 */

// Basically we got primitives and objects types

// Example: primitives
// when we copy the value of x to y, the y variable is independent that is why his value is 10 and not 20
let x = 10;
let y = x;

x = 20;

// Example: Reference
// when we log the value of b to the console we get object with the value of 20. this is because he reference the _a_ object
let a = { value: 10 };
let b = a;

a.value = 20;

// Example: Primitive
// when we increment the value of number inside a function its not effected the value of the variable number that outside the function.
// because the number inside the function is local and ditach from the global number function.

let number = 10;

function increment(number) {
  number++;
}

increment(number);
console.log("Number: ", number);

// example: reference
// but when we increment the value of an object, both variables inside and outside the function reference the same address in the memory in other words the same object

let obj = { value: 10 };

function increment2(obj) {
  obj.value++;
}

increment2(obj);
console.log("Object: ", obj);

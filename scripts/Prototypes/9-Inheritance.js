// One of the core concept of OOP.
// allows object to take or inherit properties and methods from another object.
// its make it easy to reuse code in a diffrent part of the application.

/**
 * In JavaScript we don't have a classes we only got objects.
 * essntialy we have 2 types of inheritance
 * 1. Classical
 * 2. Prototypical
 */

/**
 * Prototypical
 * create an object that contains a common properties and methods.
 * he will be the parent or the prototype of the object that inherit its properties and methods.
 */

let x = {};

/**
 * __proto__
 * it reference the prototpye object.
 * every object created in JavaScript inherit from a Base Object.
 * that base object link to others objects created globally.
 * for example let's inspect the y variable on the console.
 */

let y = {};

/**
 * __proto__
 * we get the same prototype
 * How can we verify it?
 */

const proroOfX = Object.getPrototypeOf(x);
const proroOfY = Object.getPrototypeOf(y);
console.log(
  "is x and y inherit from the same prototype object? ",
  proroOfX === proroOfY
);

/**
 * we can check by compare x.__proto__ === y.__proto__
 * BUT The __proto__ is considered outdated and somewhat deprecated.
 */

/**
 * When we try to access a method or property of an object, javasript engine will look all the way up to the root object
 * Prototype is just a regular object in memory. every object has a prototype or parent except the root object
 */

function Warrior(name) {
  this.name = name;
}

const spartacus = new Warrior("Spartacus");

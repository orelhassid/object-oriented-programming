/**
 * Private Members Using Symbols
 * Abstractions mean hiding the details and showing only the essntials.
 * in order to implement abstractions we use private properties and methods.
 */
/**
 * example: by default the name property is accessible from the outside (spiderman.name)
 * let's from example we want to hide the name property.
 * There are diffrent approachs:
 * - some developers using underscore to indicate private properties (i.e. _name) but this is not abstraction this is conventions.
 * - using Symbol
 */

/**
 * Symbols are new primitive type in ES6.
 * we use it like a calling a function and it will return a Symbol.
 * A Symbol is a unique identifier
 * Symbol() === Symbol() // return false
 * we can use this unique identifier to create a property for an object
 */

const _name = Symbol();
const _attack = Symbol();

class Hero {
  constructor(name) {
    this[_name] = name; // Symbol(): "peter" // note: Symbol are _internally_ unique
  }
  // computed property
  [_attack]() {
    console.log(`${this.name} Attack!`);
  }
}

const spiderman = new Hero("peter");
console.log(spiderman);

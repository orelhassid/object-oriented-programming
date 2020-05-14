/**
 * Classes is syntactical sugar in JavaScript
 * What is that mean?
 * in JavaScript classes is just a function with a diffrent syntax
 * let's have a look
 */

// create a class
class Hero {
  // special function in a class, used for initial properties.
  constructor(name) {
    // create a property
    this.name = name;
  }
  // declare a method
  attack() {
    console.log(`${this.name} Attack!`);
  }
}

// create an instance of a class
const spiderman = new Hero("peter");

// typeof Hero -> "function" (class is a function, that why syntactical sugar unlike language like Java)
// spiderman.attack() // Access a method

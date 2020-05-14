/**
 * In classical object-oriented programming, we have two types of methods.
 * 1. Instances methods -- available on the instance of the class (in this case spiderman.attack())
 * 2. Static methods -- available on the class itself only (i.e. Hero.)
 */

class Hero {
  constructor(name) {
    this.name = name;
  }
  // 1. instance method
  attack() {
    console.log(`${this.name} Attack!`);
  }
  // 2. static method
  static upgrade() {
    console.log("upgrade the hero");
  }
}

const spiderman = new Hero("peter");

// spiderman.upgrade() // ❌ Not available on the instance

Hero.upgrade(); // ✅ available on the class itself

/**
 * Another example is the Math built-in class in JavaScript
 * Math is a class and we can access a bunch of methods like Math.abs, Math.random()
 * all of this methods are utilities methods that allow us to perform an action.
 */

Math.random();
Hero.upgrade();

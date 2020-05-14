/**
 * What if we want to create a private property but we want to read it.
 * we don't want to change it, we just want to read / get it.
 * on way to do it is by creating a function and return the private property value.
 */
/**
 * earlier we use Object.defineProperty() to define read-only property
 * but with ES6 we have much easy and cleaner way to achive it.
 */

const _name = new WeakMap();

class Hero {
  constructor(name) {
    _name.set(this, name);
  }

  // 1. read it as a method
  getName() {
    return _name.get(this);
  }
  // 2. read it as a property
  get name() {
    return _name.get(this);
  }
  // 2. set property value by validation
  set name(value) {
    if (typeof value !== "string") throw new Error("Name must be a string");
    _name.set(this, value);
  }
}

const superman = new Hero("Clark");
console.log(superman.getName()); // "Clark" // 1. as method
console.log(superman.name); // "Clark" // 2. as property
// superman.name = 5; // ❌ "Name must be a string"
superman.name = "Peter";
console.log(superman.name); // Peter

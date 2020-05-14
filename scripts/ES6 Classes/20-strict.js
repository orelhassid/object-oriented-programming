/**
 * In classes strict mode activate by default. what is that mean?
 * we know that _this_ keyword reference the current object but only iff we use the _new_ operator.
 * but what if the developer forgot to use new?
 * then _this_ will reference the global object (window in browser)
 *
 * in strict mode - if we try to access _this_ in a class without use _new_ we will get a TypeError.
 */
class Hero {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this} Attack!`);
  }
}

// const spiderman = Hero("peter"); // _new_ is missing.

/**
 * ❌ Error
 * Uncaught TypeError: Class constructor Hero cannot be invoked without 'new'
 */

/**
 * Another example
 * strict mode avoid us to mess the window object by define _this_ as undefined
 * when we call a global function with _this_
 */

const superman = new Hero("clark");

const attack = superman.attack; // assign a reference to attack function

attack();

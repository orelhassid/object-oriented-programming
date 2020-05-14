/**
 * Classes in JavaScript are Hoisted.
 * which mean we cannot create an instance off a class before declarion.
 */

// create an instance
const spiderman = new Hero("peter"); // Cannot acces ❌

// Declarion
class Hero {
  constructor(name) {
    this.name = name;
  }
}

/**
 * This will lead to ReferenceError
 */
/**
 * Another example off Hoisted.
 * in JavaScript we have two way to create a function.
 */

attack(); // Works ✅

// 1. Function Declaration
function attack() {}

defense(); // Error ❌

// 2. Function Expression
const defense = function () {}; // semicolon at the end

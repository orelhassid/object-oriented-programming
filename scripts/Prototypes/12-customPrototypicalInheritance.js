/**
 * Refresher: In JavaScript we have two kind of inhertiance:
 * 1. Classical
 * 2. Prototypical
 *
 * In prototypical inheritance we create a centeral object that contains commons properties and methods.
 * then we inherit those properties and methods via the prototype.
 */

/**
 * Let's imagine we want to create a Magican object with the exact same attack and defense methods.
 * We don't want to create another methods like this in the Magican object.
 * for example:
 * function Magican(name) {}
 * Magican.prototype.attack = function() { console.log("Attack")}
 *
 * We don't want to repeat this implementation.
 */

function Warrior(name) {
  this.name = name;
}
function Hero() {}

Warrior.prototype.attack = function () {
  console.log("Attack!");
};

Hero.prototype.defense = function () {
  console.log("Shield!");
};

Warrior.prototype = Object.create(Hero.prototype); // After
const spartacus = new Warrior("Spartacus");
const hercules = new Warrior("Hercules");

// Warrior object (func) is the prototpye of spartacus and hercules.

/**
 * In JavaScript we have a method for creating an object for a given prototype.
 * Object.create(object.prototype) => this return an object that inherit from object
 *
 */

// Warrior.prototype = Object.create(Object.prototype); // Before
console.log(spartacus);
console.log(hercules);

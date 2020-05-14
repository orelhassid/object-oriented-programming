function Hero() {}

Hero.prototype.defense = function () {
  console.log("Shield!");
};

function Warrior(name) {
  this.name = name;
}

Warrior.prototype.attack = function () {
  console.log("Attack!");
};

Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
// new Warrior.prototype.constructor("name") => new Warrior()
Warrior.prototype.constructor = Warrior;

/**
 * We learned that the constructor function is used to create or construct an object.
 * if we log the spartacus object in the console we can see he had a prototype property which reference the the Root Object
 * and he had also a constructor property which reference the Warrior Function, so basically with this we can create a new Warrior object. like this:
 */
new Warrior.prototype.constructor("name");
new Warrior("name");

const spartacus = new Warrior("Spartacus");
const hercules = new Warrior("Hercules");

/**
 * Constructor Prototype
 */
function Warrior(name) {
  this.name = name;
}

const arthor = new Warrior("arthor");

Object.getPrototypeOf(arthor); // arthor.__proto__ (parent of arthor - Warrior)

/**
 * One thing you need to know is that constructor (like Warrior) also have a prototype property
 * arthor.__proto__ === Warrior.prototype
 */

/**
 * When we create another instance of the Warrior constructor, the attack() method will copy to arthor and spartacus objects.
 * What the problem with that?
 * well every time we copy data it's gonna takes space in the memory.
 * what we can do is to move the attack() method to their prototype which in this case the Root Object.
 * and because the prototypical behavior JavaScript will search the method up to the root object.
 */

const spartacus = new Warrior("Spartacus");

Warrior.prototype.attack = function () {
  console.log(`${name} Attack!`);
};
/**
 * So with this implementation we got
 * Instance memebers: name property.
 * Prototype members: attack()
 */

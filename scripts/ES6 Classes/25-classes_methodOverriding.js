/**
 * we learn that the JavaScript Engine search for a method or property up to the chain hierarchy
 */
class Hero {
  attack() {
    console.log("Attack from Hero!");
  }
}

class Warrior extends Hero {
  attack() {
    super.attack();
    console.log("Attack from Warrior!");
  }
}

const spartacus = new Warrior("Spartacus", "Gladiator");

console.log(spartacus.attack()); // Attack from Warrior!
console.log(spartacus.attack()); // after super() -> Attack from Hero! Attack from Warrior!

/**
 * If we want to call the attack method of the Hero class we need to use the super() that reference the Parent Constructor.
 */

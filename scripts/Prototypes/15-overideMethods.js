function Hero() {}

Hero.prototype.defence = function () {
  console.log("Defense!");
};

function extend(Child, Parent) {
  // Warrior inherit from Hero by setting Warrior prototype to Hero prototype
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Warrior(name) {
  this.name = name;
}

Warrior.prototype.attack = function () {
  console.log("Attack");
};

extend(Warrior, Hero);

function Magician(name) {
  this.name = name;
}

extend(Magician, Hero);

Magician.spell = function () {
  console.log("Spell!");
};

// Overide Defense Method.
Warrior.prototype.defence = function () {
  console.log("Shield Up");
};

const spartacus = new Warrior("Spartacus");
const harry = new Magician("Harry Potter");

/**
 * Polymorphism - one of the core components of Object-Oriented Programming
 * Poly = many, morph = forms | Many Forms
 * its mean that in JavaScript we can create a program that produce many form in a single line
 * by using inheritance in objects.
 * Here is example of polymorphism:
 */

// list of heroes
const heroes = [new Warrior(), new Magician()];

// iterate over heroes
for (hero of heroes) hero.defence();

// Without using objects: (individual functions)
for (hero of heroes) {
  if (hero.type === "warrior") warriorDefense();
  else if (hero.type === "magician") magicianDefense();
}

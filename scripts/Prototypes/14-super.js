/**
 * Let's say I want to pass a parameter to the Hero Constructor.
 * if I log spartacus on the console we only see the name property not a title, but in the time we create the spartacus object we need to see this property too.
 *
 * when we create an object with the new keyword 3 things happens:
 * 1. the new operator create an new empty object and then set _this_ to point to that object
 * 2. set property to this object by using this.property = value
 * 3. This object will be return from the Constructor Function.
 *
 * when we use this it reference the current object so the reason method 1 of calling the Hero function and pass a parameter didn't work its because _this_ reference the globl window object.
 * you can verify that by trying to access window.title
 */
function Hero(title) {
  this.title = title;
}

Hero.prototype.defense = function () {
  console.log("Shield!");
};

function Warrior(name, title) {
  //   Hero(title); // One method. not working.
  //   new Hero(title); // we dont want to use _new_ here because he will reference a new empty object. we want to reference the object that created by Warrior constructor.
  Hero.call(this, title); // call the function and pass the current object.
  this.name = name;
}

Warrior.prototype.attack = function () {
  console.log("Attack!");
};

Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

const hercules = new Warrior("Hercules", "Roman hero and god");
const spartacus = new Warrior("Spartacus", "Gladiator");

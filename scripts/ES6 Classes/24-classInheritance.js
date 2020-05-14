/**
 * In ES6 Classes we can inherit by using the _extends_ keyword.
 * when we inherit ffrom another class we can access all the methods and properties defined.
 * note: when we use _this_ to define a property he will be part of the current object, and method will be accessible through the prototype.
 */
class Hero {
  constructor(title) {
    this.title = title;
  }

  attack() {
    console.log(`${this} Attack!`);
  }
}

class Warrior extends Hero {
  constructor(name, title) {
    super(title); // Call the parent constructor first.
    this.name = name;
  }
}

const spartacus = new Warrior("Spartacus", "Gladiator");

/**
 * The problem is when you want to use the constructor function inside the Parent class and initialize properties.
 * If we do it we will get a ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 * in order to fix it we have to call the super() constructor.
 *
 */

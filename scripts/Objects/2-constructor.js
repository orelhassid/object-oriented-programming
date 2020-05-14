// Constructor Property
/**
 * every object has a property called constructor
 * and he reference the function that was used to construct or create that object
 */

// Factory Function
function createPerson(name) {
  return {
    name,
    talk: function () {
      console.log("Hello There!");
    },
  };
}

const warrior = createPerson("Warrior");

// Constructor Function
function Person(name) {
  this.name = name;
  this.talk = function () {
    console.log("Hello There!");
  };
}

const wizard = new Person("Wizard");

/**
 * the result of warrior.constructor are - Object() {}
 * when we create an object with Object literlas syntax, javascript will use this function or constructor to create it
 */

const lion = {};

// const lion = new Object()

// We also have other build-in constructor

new String(); // "", '', ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// Every object has a constructor property
// And that reference the function that was used to create that object

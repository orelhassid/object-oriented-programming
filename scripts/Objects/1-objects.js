// Object Literals
/**
 * problem: when we want to create the same object with a diffrents values
 * wrong solution: duplicate the same object | reason: because we get a repeated code that hard to read an maintain
 * solution:
 */

const person = {
  name: "Orel",
  age: 20,
  talk: function () {
    console.log("Hello There!");
  },
};

// Factory Function
// remember in ES6 when the key and value are the same you dont have to write key:value instead use only the name key
function createPerson(name, age) {
  return {
    name,
    age,
    talk: function () {
      console.log("Hello There!");
    },
  };
}

const orel = createPerson("orel", 20);

// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.talk = function () {
    console.log("Hello There!");
  };
}

const naruto = new Person("Naruto", 30);

/**
 * The _this_ keyword reference the current object.
 * In global scope _this_ reference the _window_ object
 */

/**
 * the _new_ operator allows us to use _this_ inside a function
 * when we use the _new_ we create an instance from the Person object
 */

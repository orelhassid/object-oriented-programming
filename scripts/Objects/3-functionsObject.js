// Functions are Objects

function Person(name) {
  this.name = name;
  this.talk = function () {
    console.log("Hello There!");
  };
}

const wizard = new Person("Wizard");

/**
 * Person.name = name of the function
 * Person.length = number of arguments
 * Person.constructor = Function(args, body){}
 */

// When we declare a function inernally it will represnt like this..
const Person2 = new Function(
  "name",
  `
 this.name = name;
 this.talk = function () {
   console.log("Hello There!");
 };
 `
);

const warrior = new Person2("warrior");

// Let's take a look on Methods that available in our function

// The _call_ Method allow us to call a function
// function.call(this, arguments)
function Welcome(name) {
  console.log("this", this);
  console.log("Hello " + name);
}
Welcome.call({}, "Hero");

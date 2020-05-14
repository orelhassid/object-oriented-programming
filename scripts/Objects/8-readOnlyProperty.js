/**
 * What if we want to create a property that visible to the outside but can not be change. in other words "Read only property"
 * 1. using a method that return a local variable.
 * and then call it like a function().
 * but what if we want to call it like a property it could be much better.
 *
 * 2. using Object.defineProperty. this method takes three arguments
 *  a) the object that we want to add properties to him (_this_)
 *  b) property name (string)
 * c)
 */
function Hero(name, weapon, job) {
  let position = { x: 0, y: 0 };
  this.name = name;
  this.weapon = weapon;
  this.job = job;

  this.getPosition = function () {
    return position;
  };
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      if (typeof value !== "object")
        throw new Error("value should be an object");
      position = value;
    },
  });
}

const naruto = new Hero("naruto", "konai", "ninja");

/**
 * set(value) method used to validate the value before assign to object's property
 * get() method used to get a local variable
 */

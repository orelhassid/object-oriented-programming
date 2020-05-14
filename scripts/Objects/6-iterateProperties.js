/**
 * Iterate or loop over Object's properties.
 * 1. we use the for-in loop to iterate an object.
 * 2. Object.keys(obj) return an array of keys
 * 2. Object.values(obj) return an array of values
 */

function Hero(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.talk = function () {
    console.log("Hello There!");
  };
}

const wizard = new Hero("Wizard", "wand");

// example: getting all the keys from the wizard object.
for (let key in wizard) console.log(key);

// example: getting all the keys and values from the wizard object.
for (let key in wizard) console.log(key, wizard[key]);

// example: getting everything except the Methods.
for (let key in wizard) {
  if (typeof wizard[key] !== "function") console.log(key, wizard[key]);
}

// example: return all the keys inside an array
const keys = Object.keys(wizard);

// example: return all the keys inside an array
const values = Object.values(wizard);

// check the existing of a property
if ("weapon" in wizard) console.log("Wizard has a weapon");

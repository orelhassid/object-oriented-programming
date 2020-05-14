/**
 * The WeakMap object is a collection of properties which the keys are objects and the values can be anything.
 * The reason it called weakmap its because the keys are weaks, which means if the is no reference to the key it will be garabge collected
 */

const _name = new WeakMap();
const _defense = new WeakMap();

class Hero {
  constructor(name) {
    _name.set(this, name);
    _defense.set(this, () => {
      console.log("Defense!", this);
    });
  }

  attack() {
    _defense.get(this)(); // Call a private method.
    console.log(_name.get(this));
  }
}

const superman = new Hero("Clark");
superman.attack();

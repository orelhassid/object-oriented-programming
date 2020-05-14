/**
 * Wיhen we create an object we need to implement a simple interface.
 * its mean Hide the details and show only the essntials.
 * because when we make a change in our object we will have to modify or update any reference to methods or properties of an object in our code.
 * also there are properties that if they will change they may break our application.
 */

/**
 * example: a Hero object has default position set to 0.
 * we calculate the position based the walk method.
 * but what happens if we modify directly the position? you guess right, the application will break, suddenly the player or the hero will jump to a diffrent positions.
 */

function Hero(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  this.position = { x: 0, y: 0 };
  this.walk = function (steps) {
    this.position.x++;
  };
}

const warrior = new Hero("arthor", "sword");

/**
 * So how we create a Private properties and methods?
 * well its simple, instead of using _this_ we will use _let_ to create a local variables to that function.
 */

function Hero2(name, weapon) {
  let position = { x: 0, y: 0 };
  this.name = name;
  this.weapon = weapon;
  this.walk = function (steps) {
    position.x++;
  };
}

const wizard = new Hero2("marlin", "wand");

// when we try to access the properties of the wizard object
// we no longer see the position variable - the interface is more simple
// we can refer to the position variable as a "Private Member"

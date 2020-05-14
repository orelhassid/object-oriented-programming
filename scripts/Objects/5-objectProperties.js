/**
 * Objects in JavaScript are dynamic.
 * we can add new property to them by using Dot Notation or Barckets Notation.
 * that makes JavaScript extremely powerful.
 * for example if we get a user object from the client and we want to add property like a unique id.
 * in other language like Java or C# we have to modify the class.
 */

function Hero(name) {
  this.name = name;
  this.talk = function () {
    console.log("Hello There!");
  };
}

const wizard = new Hero("Wizard");

wizard.weapon = "wand";
wizard["skill-name"] = "tornado";

delete wizard.weapon;
// we use brackets notation when we need to access the property dynamic by variable.
// another reason is when we access a invalid property for example one that include "-" in his name.

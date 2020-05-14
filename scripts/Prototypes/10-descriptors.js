// Prototype Descriptor / Attributes?

let person = { name: "orel" };

/**
 *
 * if we try to access person.toString() it works.
 * however if we try to iterate the memebers of this object we will not see the toString() method.
 */

for (let key in person) console.log(key);
console.log(Object.keys(person));
/**
 * so only the name property is visible
 * not the properties and methods of the root object
 */
Object.keys(person); // ["name"]
/**
 * So why cant we iterate over the methods of the root Object?
 * The answer is: becasue in javascript properties has attributes attach to them.
 * sometimes this attributes prevent property from being enumerated
 */

/**
 * So lets create rootObject variable that hold the prototype of the person object.
 * then get the attributes of the toString() method of the rootObject.
 * Object.getOwnPropertyDescriptor(target object, property/method) | result: an Object descriptor
 *
 */
let rootObject = Object.getPrototypeOf(person);
let decriptor = Object.getOwnPropertyDescriptor(rootObject, "toString");
console.log("Descriptor:", decriptor);

/**
 * configurable = determine if we can delete this member
 * enumerable = This is why when we iterate or enumerate the person object we didn't see the toString method
 * writable = determine if we can overide or change implementation or set his value
 */

/**
 * When you create your own object you can create those attributes with Object.defineProperty() method.
 * let's create attribute to the person object we defined earlier.
 */
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
  configurable: false, // will not be deleted
});

person.name = "Naruto"; // writeable false
console.log(person); // {name: 'orel'} - the name is not changed
console.log(Object.keys(person)); // [] - the name property is not enumerable / iterate
delete person.name; // configureable false

/**
 * By default all this attributes are true
 */

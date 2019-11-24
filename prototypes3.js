function Animal(name = "gandalf", age = 2) {
  // Behind the scenes javascript does
  //   const animal = Object.create(Animal.prototype);
  this.name = name;
  this.age = age;
}

Animal.prototype.owner = "nicollas matheus";

console.log(Animal.prototype);
console.log(new Animal().owner);

/*
because of the word NEW before a funciont invocation javascript engine 
already CREATES AN OBJECT using Object.create(function.prototype) and
also returns and object for us
*/

const Animal2 = (name = "queenie", age = 3) => {};
console.log(Animal2.prototype);

/**
 * arrow functions are not constructor functions
 * this mean that it cannot return any object for us
 * and also cannot use prototype feature
 *
 */

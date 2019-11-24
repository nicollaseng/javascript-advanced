const defaultProperties = {
  owner: "nicollas matheus"
};

function Animal(name = "gandalf", age = 2) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.age = age;

  return animal;
}

Animal.prototype.owner = "nicollas matheus";

console.log(Animal.prototype);
console.log(Animal().owner);

/*
    The most simple and easy definition for Prototypes is an objects that refereces a function
*/

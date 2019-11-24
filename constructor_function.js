const defaultProperties = {
  owner: "nicollas matheus"
};

function Animal(name = "gandalf", age = 2) {
  let animal = Object.create(defaultProperties);
  animal.name = name;
  animal.age = age;

  return animal;
}

console.log(Animal());
console.log(Animal().owner);

/*
    Constructor functions are functions that returns an object
*/

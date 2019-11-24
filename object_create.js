const animal = {
  name: "gandalf",
  age: 1,
  father: "nicollas"
};

const queenie = Object.create(animal);
queenie.name = "queenie";

console.log(animal);
console.log(queenie);
console.log(queenie.father);

/*
    Object.create allows to access properties of parent object
    but only access properties. this does not implicate that 
    new object has same properties as parents one. WE CAN 
    ONLY ACESS THESES PROPERTIES
*/

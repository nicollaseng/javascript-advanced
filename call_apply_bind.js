/*
    Implicit binding
    just look to the left of function. if there is any object so this object
    will be the contexty of function and the keyword "this" will refers to it
*/

function sayName() {
  return {
    name: "nicollas",
    age: 28,
    sayName: function() {
      console.log(`My name is ${this.name}`);
    },
    sayAge: {
      age: 29,
      sayAge: function() {
        console.log(`My age is ${this.age}`);
      }
    }
  };
}

const name = sayName();
name.sayName();

const age = sayName();
age.sayAge.sayAge();

/**
 * Explicit binding
 * allows us insert an external context in a function
 * .call()
 * .apply()
 * .bind()
 */

const animal = {
  speak: false,
  movement: true
};

function controlAnimal() {
  console.log(
    `animals normally speak: ${this.speak} and moves: ${this.movement}`
  );
}

controlAnimal();

// call allows to pass a context to a functiond
controlAnimal.call(animal);

function Players(player1, player2, player3) {
  console.log(`
         Welcome to ${this.game}. the best players are ${player1}, ${player2}, ${player3}
    `);
}

const ctx = {
  game: "Fortnite"
};
const players = ["nicollas", "jose", "mariana"];
Players.call(ctx, players[0], players[1], players[2]);

/**
 * call(context, args1, args2, args3, ...)
 */

// .apply works like .call but it allows us to pass an array of arguments as second argument of it
Players.apply(ctx, players);

// bind works as .call but it creates a new function for us
const specialPlayers = Players.bind(ctx, players[0], players[1], players[2]);
specialPlayers();

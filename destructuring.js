// Array destructuring
const home = ["poor", "medium", "rich"];
const [a, b, c] = home;
console.log(a);
console.log(b);
console.log(c);

// Object destructuring
var user = {
  n: "nicollas matheus",
  h: "nicollas@nmatheus.com",
  l: "Fortaleza, Ceara, Brazil"
};
console.log(user);

const { n, h, l } = user;
const { n: name, h: email, l: address } = user;
console.log(n, h, l);
console.log(name, email, address);

// real cases examples
function getRepos(id, name, date, owner){
    // some stuff here
}
getRepos(2, "nicollaMatheus", new Date(), "nicollas matheus");

// can be refactor to this
function repos({ id="", name="", date=null, owner="" });
repos({
    id: 2,
    name: "nicollasMatheus",
    date: new Date(),
    owner: "nicollas matheus"
})

// we can apply same destructuring date for arrays
Promise.all([
    getProfile(player),
    getRepos(player)
]).then(([ profile, player ]) => {
    // do some stuff here
})
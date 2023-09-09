////CODING ALONG WITH INTRO TO OOP VIDEO//////
/////PLAYER/////Create Players

// const player= {
//     name: "?",
//     hp: 100,
//     mp: 0,
//     items: []
// };

// const hanSolo = player;
// hanSolo.name= "Han Solo";
// hanSolo.hp= 80;
// hanSolo.items= ["Blaster"];
// const darthVader= player;
// console.log(hanSolo);
// console.log(darthVader);

///this is bad code ^^^
//because we only have one player so it's changing stuff for hans and darth
//at the same time. we need a better way to create this.

// instead do this:: read down below

// const createPlayer= (name, hp, mp, items) => {
//     return {
//     name,
//     hp,
//     mp,
//     items
// };
// };
// const hanSolo= createPlayer(
//     "Han Solo", 100, 10, ["Blaster"]
// );
// console.log(hanSolo);
// const darthVader= createPlayer (
//     "Darth Vader", 200, 50,["Evil Weapon"]
// );
// console.log(darthVader);

//there might be some issues on this:
//ew can automate this using classes///
class Player {
    age= 20;
    constructor(name,hp, mp, items) {
    this.name= name;
    this.hp= hp;
    this.mp= mp;
    this.items= items;

}
speak(phrase) {
    console.log(`${this.name} says: ${phrase}`);
}
}

const hanSolo= new Player('Han Solo', 100, 10, ['blaster']);
hanSolo.speak('Never Tell Me The Odds');
hanSolo.age=50;
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));



const nader= new Player('Nader', 10, 5,["Computer"]);
nader.speak('Monkeys are the best animal')
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));

///this is what happens behind the screen when we create classes
function AnotherPlayer(name, hp, mp, items) {
    this.name= name;
    this.hp= hp;
    this.mp= mp;
    this.items= items;
    
    };


AnotherPlayer.prototype.speak= this.speak =function (phrase) {
    console.log(`${this.name} says: ${phrase}`);
};

const darthVader= new AnotherPlayer('Darth Vader',200,50,['Saber']);

console.log(darthVader);
darthVader.speak('Hshfihhhhhh');
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));


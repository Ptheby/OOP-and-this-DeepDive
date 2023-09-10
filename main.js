////CODING ALONG WITH INTRO TO OOP VIDEO//////SKIP AHEAD TO LINE 165 for "Understading "this in Context
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
// //ew can automate this using classes///
// class Player {
//     age= 20;
//     constructor(name,hp, mp, items) {
//     this.name= name;
//     this.hp= hp;
//     this.mp= mp;
//     this.items= items;

// }
// speak(phrase) {
//     console.log(`${this.name} says: ${phrase}`);
// }
// }

// const hanSolo= new Player('Han Solo', 100, 10, ['blaster']);
// hanSolo.speak('Never Tell Me The Odds');
// hanSolo.age=50;
// console.log(hanSolo);
// console.log(Object.getOwnPropertyNames(hanSolo));
// console.log(Object.getOwnPropertyNames(hanSolo.__proto__));



// const nader= new Player('Nader', 10, 5,["Computer"]);
// nader.speak('Monkeys are the best animal')
// console.log(nader);
// console.log(Object.getOwnPropertyNames(nader));
// console.log(Object.getOwnPropertyNames(nader.__proto__));

// ///this is what happens behind the screen when we create classes
// function AnotherPlayer(name, hp, mp, items) {
//     this.name= name;
//     this.hp= hp;
//     this.mp= mp;
//     this.items= items;
    
//     };


// AnotherPlayer.prototype.speak= this.speak =function (phrase) {
//     console.log(`${this.name} says: ${phrase}`);
// };

// const darthVader= new AnotherPlayer('Darth Vader',200,50,['Saber']);

// console.log(darthVader);
// darthVader.speak('Hshfihhhhhh');
// console.log(Object.getOwnPropertyNames(darthVader));
// console.log(Object.getOwnPropertyNames(darthVader.__proto__));


// ///Understanding 'this' in Context:
// 2. Dive into the lesson on "Understanding 'this' in JavaScript".

// Craft a simple code snippet that illustrates different behaviors of the "this" keyword based on context.
// Discuss how "this" behaves in arrow functions versus traditional functions.
// Commit: "Grasped the nuances of 'this' in JavaScript".

//coding along from video first///
// function test(){
//     console.log(this);
// }
// test();  //the window object or the global object is the this in this case?

// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     fullName: function(){
//         console.log(this)
//         console.log(this.firstName + " " + this.lastName)
        
//     }
// }
// user.fullName();   //Patrick Scott
//we can see that the "this" in this case refers to user. fullName function
//belongs to user object. 

//Trying the above with an arrow function*****

// const user = {
//     firstName: "Patrick",
//     lastName: "Scott",
//     fullName: () => {
//         console.log(this)
//         console.log(this.firstName + " " + this.lastName)
        
//     }
// }
// user.fullName();//he is getting WINDOW object but i am getting unexpected token error for the arrow.


//modifying above for another example
// const user = {
//          firstName: "Patrick",
//         lastName: "Scott",
//         hobbies: ['programming', 'piano'],
//         listHobbies: function() {
//             this.hobbies.forEach(function(hobby) {
//                 console.log(this)//undefined because it's not connected to USER< but GLOBAL WINDOW!
//                 console.log(hobby)
//             }, this);
//         }
            
//        }
     
//      user.listHobbies();

///How this works with constructor functions///
// function User(name) {
//     this.name= name;
//     console.log(this);

  
// }
// const devsage= new User('DevSage');
// const condingPhase= new User('CodingPhase');





// Understanding 'this' in Context:
// 2. Dive into the lesson on "Understanding 'this' in JavaScript".

// Craft a simple code snippet that illustrates different behaviors of the "this" keyword based on context.


const dog = {
    breed: "Boxer",
    size: "large",
    toys: ["ball", "bone", "stuffed animal"],
    listToys : function() {
        this.toys.forEach(function(toy) {     //not sure this is working as intended? 
            console.log(toy)
        });
        this.color = "Brown";  //i use this to add a property of color with a brown value to dog. 
    }
}
console.log(dog.listToys());  //this works here because i can call on dog. "this" would not because it is global at this point and not defined with these properties
console.log(dog);      //Breed: 'Boxer', size: 'large', toys: Array(3), color: 'Brown', listToys: ƒ}

// Discuss how "this" behaves in arrow functions versus traditional functions.
// My Answer: Arrow functions do not have a "this" scope. They look to the closest, and i assume, above regular function for an object to 
//assign this to. If none, then it adopts the global object/Window, as "this"  UNLIKE traditonal functions, it uses the object that function is within. 

/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window - its the 'this' context for the entire js window you're working in
* 2. implicit - any this keywords are bound to the object before the dot in a invocation
* 3. new - creates a format for new objects called a constructor
* 4. explicit - using the call method to specifically bind an object to this for a method



*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greetMe(name) {
    return `Hello,  ${name}.`;
}

console.log(greetMe('Emily'));


// Principle 2
console.log(' ');
// code example for Implicit Binding

const career = {
    title: 'Web Developer',
    company: 'Google',
    salary: 100000,
    listing: function() {
        console.log(`Now Hiring for ${this.title} at ${this.company}. Starting salary: $${this.salary}.`);
    }
};

career.listing();

// Principle 3
console.log(' ');
// code example for New Binding

function zooAnimal(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
    this.intro = function() {
        console.log(`Hello, I'm ${this.name} the ${this.species}! ${this.sound}!`);
    }
};

const bagheera = new zooAnimal('Bagheera', 'panther', 'Roar');
const shiva = new zooAnimal('Shiva', 'tiger', 'Rooooooar');
const mufasa = new zooAnimal('Mufasa', 'lion', 'Rooooooooooooar');

bagheera.intro();
shiva.intro();
mufasa.intro();

// Principle 4
console.log(' ');
// code example for Explicit Binding

function animalsAgain(){
  console.log(`I'm ${this.name}! ${this.animalSound}`);
}

let myPanther ={
  name: 'Bagheera',
  animalSound: 'Roar!'
}

animalsAgain.call(myPanther);
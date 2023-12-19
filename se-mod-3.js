
// Objects 


const person = {
    firstname : "Dylan",
    lastname : "Herbst",
    "has cat": true,
    favFood : ["pasta", "Thai", "Steak"],
    car: {make: 'mercedes', model: 'GLC 63', tyres: {num: 4, color: 'black'}},
    drive(){
        console.log(`diring my ${this.car.make} ${this.car.model}`)
    }
};

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.car = {make: 'mercedes', model: 'AMG 63', tyres: {num: 4, color: 'white'}},
    this.drive = () => (`diring my ${this.car.make} ${this.car.model}`);
}


let person1 = new Person();
let person2 = new Person();
let person3 = new Person();


// for loop
for (let i = 0; i < person.favFood.length; i++){
    console.log(person.favFood[i]);
}

// Object Iteration
for (let key in person) {
    console.log('key:' + key);
    console.log('value:' + person[key])
}


let newPerson = person;

person.firstname = "mat";

console.log(newPerson.firstname);

newPerson.firstname = 'Will';

console.log(person.firstname);
console.log(newPerson.firstname);

newPerson.age = 20;
console.log(newPerson.age);

const school = {
    name: 'IoD',
    location: 'Perth'
}



// SHALLOW COPY LONG HAND
// for (let key in person) {    
//     clone[key] = person[key];
// }

const clone = {...person,...school}; // shallow copy short hand

clone.firstname = 'maddie';
console.log(person.firstname);
console.log(clone.firstname);
console.log(clone.car);
console.log(clone.car.tyres.num);
console.log(clone.location);

console.log(clone)

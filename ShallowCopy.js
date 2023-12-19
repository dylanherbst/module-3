
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

const school = {
    name: 'IoD',
    location: 'Perth'
}



// SHALLOW COPY LONG HAND
let clone = person;
for (let key in person) {    
    clone[key] = person[key];
}

const clone1 = {...person,...school}; // shallow copy short hand

console.log(clone1);

console.log(clone);


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

// for loop
for (let i = 0; i < person.favFood.length; i++){
    console.log(person.favFood[i]);
}

// Object Iteration
for (let key in person) {
    console.log('key:' + key);
    console.log('value:' + person[key])
}

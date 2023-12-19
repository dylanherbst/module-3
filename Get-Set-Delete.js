
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

console.log(person.firstname, person.lastname, person["has cat"]); // get


delete person.lastname; // delete 
if (person.lastname) {
console.log(person.lastname);
};


person.lastname = "new last name"; // set
console.log(person.lastname);

console.log(person);

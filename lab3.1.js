// 1.  What are the results of these expressions? (answer first, then use console.log() to check) 
// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(!true); // false
// console.log(6 / "3") // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px") // 9px
// console.log("$" + 4 + 5); // $45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // 4px - 2 or 2px // NaN
// console.log("  -9  " + 5); // 4 // -9  5
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(undefined == null); // true 
// console.log(undefined === null); // false 
// console.log(" \t \n" - 2) // -2


// 2. Which of the below are not giving the right answer? Why are they not correct? How can we fix them? 

let three = "3" 
let four = "4" 
let thirty = "30" 
 
//what is the value of the following expressions? 
let addition = three + four // 34 // + joins strings together 
let multiplication = three * four // * will convert string into number
let division = three / four  // / will convert string into number
let subtraction = three - four // - will convert string into number
 
let lessThan1 = three < four // comparing string values
let lessThan2 = thirty < four // comparing string values JavaScript starts by comparing the first characters of each string.
                              // In the Unicode character set, the character '3' has a lower value than the character '4'.
                              // Therefore, when comparing '30' with '4', JavaScript only considers the first characters '3' and '4' and determines that '3' is less than '4'.

// console.log(addition);
// console.log(multiplication);
// console.log(division);
// console.log(subtraction);
// console.log(lessThan1);
// console.log(lessThan2);


// 3.  Which of the following console.log messages will print? Why? 
// if (0) console.log('#1 zero is true'); // false
// if ("0") console.log('#2 zero is true'); 
// if (null) console.log('null is true'); // flase
// if (-1) console.log('negative is true');
// if (1) console.log('positive is true');


// 4.  Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do? 
 
let a = 10, b = 3; 
let result = ` ${a} + ${b} is `; 
 
// if (a + b < 10) { 
//   result += 'less than 10'; 
// } else { 
//   result += 'greater than 10'; 
// }

let value = a + b <10 ? result += 'less than 10' :   result += 'greater than 10'; 

// console.log(value);



// 5.  Rewrite the following function using: a) function expression syntax, and b) arrow function syntax. Test each version to make sure they work the same. 
 
// function getGreeting(name) { 
//     return 'Hello ' + name + '!'; 
// } ;

getGreeting = (name) => {console.log('Hello ' + name + '!'); };

// getGreeting('dylan');



// 6.  a) Complete the inigo object by adding a lastName property and including it in the 
// greeting.  
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead 
// prints his famous catch phrase to the console. 
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.

const westley = { 
    name: 'Westley', 
    numFingers: 5 
} 
const rugen = { 
    name: 'Count Rugen', 
    numFingers: 8 
} 


const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Haal',
    greeting(person) {  
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `; 
        console.log(greeting + this.getCatchPhrase(person)); 
    }, 
    // getCatchPhrase(person) { 
    //     if ( person.numFingers > 6) {
    //         return 'You killed my father. Prepare to die.';
    //     } 
    //     return 'Nice to meet you.'; 
    // },
    getCatchPhrase(person) {
      let result = person.numFingers > 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.';
      return result;
} 
}
// inigo.greeting(westley);
// inigo.greeting(rugen);



// 7.  The following object represents a basketball game and keeps track of the score as the 
// game progresses. 
// a)  Modify each of the methods so that they can be ‘chained’ together and the last line of 
// the example code works 
// b)  Add a new method to print the full time final score 
// c)  Add a new object property to keep track of the number of fouls and a method to 
// increment it, similar but separate to the score. Include the foul count in the half time and 
// full time console messages 
// d)  Test your object by chaining all the method calls together in different combinations. 
 
const basketballGame = { 
    score: 0,
    fouls: 0,
    freeThrow(num = 1) { 
        this.score += num; 
        return this;
    }, 
    basket(num = 1) { 
        this.score += num * 2; 
        return this;
    }, 
    threePointer(num = 1) { 
        this.score += num * 3; 
        return this;
    }, 
    foulCount(num = 1){
        this.fouls += num;
        return this;

    },

    halfTime() { 
        console.log('Halftime score is '+this.score); 
        console.log('Amount of fouls at Halftime: '+this.fouls); 
        return this;
    } 
} 
//basketballGame.basket(1).freeThrow(2).freeThrow().basket().threePointer(2).foulCount(3).halfTime();
 


// 8.  The object below represents a single city. 
// a)  Write a function that takes an object as an argument and uses a for...in loop to access 
// and print to the console each of those object properties and their values. Test it using 
// the sydney object below. 
// b)  Create a new object for a different city with different properties and call your function 
// again with the new object. 
 
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney'
}

const perth = { 
    name: 'Perth', 
    population: 5_121_000, 
    state: 'WA', 
    founded: '26 January 1733', 
    timezone: 'WAST'
}

let getDetails = (city) => {
for (let key in city) {
    let value = city[key];
    console.log(`Keys: ${key} `);
    console.log(`Values: ${value}`)
}
}; 
// getDetails(sydney);
// getDetails(perth);

// 9.  Use the following variables to understand how JavaScript stores objects by reference. 
// a)  Create a new moreSports variable equal to teamSports and add some new sport 
// values to it (using push and unshift) 
// b)  Create a new dog2 variable equal to dog1 and give it a new value 
// c)  Create a new cat2 variable equal to cat1 and change its name property 
// d)  Print the original teamSports, dog1 and cat1 variables to the console. Have they 
// changed? Why? 
// e)  Change the way the moreSports and cat2 variables are created to ensure the 
// originals remain independent 
 

let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//let moreSports = teamSports.push('football', 'rugby');
// console.log(moreSports);

let moreSports = [...teamSports, 'football', 'rugby'];
//console.log(moreSports);

// let dog2 = 'notbigno';
// dog2 = dog1; 

// let cat2 = { name: 'Skinny', breed: 'No hair' }; 
// cat1 = cat2;

// let dog2 = {...dog1};
// dog2 = 'ronin';

// let cat2 = {...cat1};
// cat2 =  { name: 'Skinny', breed: 'No hair' }; 

// console.log(cat1);
// console.log(cat2);

// console.log(dog1);
// console.log(dog2);



// 10. The following constructor function creates a new Person object with the given name and 
// age values. 
// a)  Create a new person using the constructor function and store it in a variable 
// b)  Create a second person using different name and age values and store it in a separate 
// variable 
// c)  Print out the properties of each person object to the console  
// d)  Rewrite the constructor function as a class called PersonClass and use it to create a 
// third person using different name and age values. Print it to the console as well. 
// e)  Add a canDrive method to both the constructor function and the class that returns 
// true if the person is old enough to drive. 
 
function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 

}
    Person.prototype.canDrive1 = function() {
        if (this.age > 18) {
            return console.log('can drive!!!!');
        } else {
            return console.log('can not drive!!');
        }
    };


let Dylan = new Person ('dylan', 23);
let Maddie = new Person ('Maddie', 25);

// console.log(Dylan);
// console.log(Maddie);

class Pep {
    constructor(name, age) {
    this.name = name; 
    this.age = age; 
    this.human = true; 
}

canDrive() {
    if (this.age > 18) {
        return console.log('can drive!!!!');
    } else {
        return console.log('can not drive!!')
    }
}
};
let Mat = new Pep('mat', 30);

// Mat.canDrive();
// Maddie.canDrive1();
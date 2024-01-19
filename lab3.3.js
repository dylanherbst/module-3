// 1. // makeCounter below is a decorator function which creates and returns a function that 
// increments a counter. 

// c)  Modify makeCounter to take another argument incrementBy, which specifies how 
// much each call to counter() should increase the counter value by. 
function makeCounter(startFrom, incrementBy) { 
    // b)  Modify makeCounter so that it takes an argument startFrom specifying where the 
// counter starts from (instead of always starting from 0) 

    let currentCount = startFrom * incrementBy;
 
    return function() { 
        currentCount++; 
        console.log(currentCount) 
        return currentCount; 
    }; 
} 
 
let counter1 = makeCounter(1, 3); 

// a)  Create a second counter counter2 using the makeCounter function and test to see if 
// it remains independent to counter1 
let counter2 = makeCounter(12, 2); 
 
// counter1(); // 1 
// counter1(); // 2
// counter2();


// 2. // The following delayMsg function is intended to be used to delay printing a message until 


// b)  Rewrite delayMsg as an arrow function 
const delayMsg = (msg) => console.log(`This message will be printed after a delay: ${msg}`); 
 
// c)  Add a fifth test which uses a large delay time (greater than 10 seconds) 
// //

// d)  Use clearTimeout to prevent the fifth test from printing at all. 
// clearTimeout(time);




// 3. // 'Debouncing' is a concept that refers to 'putting off' the execution of multiple, fast-timed, 
// similar requests until there's a brief pause, then only executing the most recent of those 
// requests. See https://www.techtarget.com/whatis/definition/debouncing  
// It's often used to handle fast-firing scrolling events in a browser, or to prevent multiple server 
// requests being initiated if a user clicks repeatedly on a button. 
// Using the following code to test and start with: 


// c)  Extend debounce to allow the original debounced function printMe to take an argument 
// msg which is included in the console.log statement. 
function printMe(msg) { 
console.log(`The message is: ${msg}`)
} 
// a)  Create a debounce(func) decorator, which is a wrapper that takes a function func and 
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second 
// pause, the most recent call to func should be executed and any others ignored. 
 function debounce(func, ms) {
    let timeout;
    return function(msg) {
        clearTimeout(timeout)
        timeout = setTimeout(func, ms, msg)
       
// b)  Extend the debounce decorator function to take a second argument ms, which defines the 
// length of the period of inactivity instead of hardcoding to 1000ms 
    }
 }

//printMe = debounce(printMe); //create this debounce function for a) 
 
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls 
// setTimeout( printMe, 100, 'printed1');  
// setTimeout( printMe, 2000, 'printed2');  
// setTimeout( printMe, 6000, 'printed3');



 
 
// 4. The Fibonacci sequence of numbers is a famous pattern where the next number in the 
// sequence is the sum of the previous 2. 
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc. 
 
 
// b)  Write a new version printFibonacciTimeouts() that uses nested setTimeout 
// calls to do the same thing 
// c)  Extend one of the above functions to accept a limit argument, which tells it how many 
// numbers to print before stopping. 
 

// a)  Write a function printFibonacci() using setInterval that outputs a number in 
// the Fibonacci sequence every second. 

function printFibonacci(countNum) {
    let first = 1;
    let second = 1;
    let iterations = 0;
    console.log(first);
    console.log(second);
   
   

    const id = setInterval( function printNext (){
let next = first + second;
console.log(next)
first = second;
second = next;
iterations++;

if (iterations >= countNum){
    clearInterval(id);
}
    }, 1000);
}
//printFibonacci(4);

function printFibonacciTimeouts() {
    let first = 1;
    let second = 1;
    console.log(first);
    console.log(second);
    setTimeout( function printNext (first, second){
let next = first + second;
console.log(next);
setTimeout(printNext, 1000, second, next);
    }, 1000, first, second);

}

//printFibonacciTimeouts()



// TEST NESTED SETTIMEOUT //
function test (a, b) {
    let add = a + b;
    console.log(add);
    
   setTimeout( function times (add) {
        let answer = add * add;
        console.log(answer)
        setTimeout(times, 1000, add);
    
    }, 1000, add)};

      //  test(1, 2);


// 5. The following car object has several properties and a method which uses them to print a 
// description. When calling the function normally this works as expected, but using it from 
// within setTimeout fails. Why? 
 
let car = { 
    make: "Porsche", 
    model: '911', 
    year: 1964, 
 
    description() { 
 
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
    } 
}; 
 
//car.description(); //works 

// a)  Fix the setTimeout call by wrapping the call to car.description() inside a 
// function 
// setTimeout( function () {car.description()}, 200);


// b)  Change the year for the car by creating a clone of the original and overriding it 
let carCopy = {...car};
carCopy.make = "Mercedes";
carCopy.model = "AMG 64";
carCopy.year = "2023";

car = carCopy 

//console.log(carCopy);

// d)  Use bind to fix the description method so that it can be called from within 
// setTimeout without a wrapper function 

let bindCar = car.description.bind(car);

//setTimeout(bindCar, 200);


//carCLone2 = {...car, year: 2000}
// c)  Does the delayed description() call use the original values or the new values from 
// b)? Why? // the original


// e)  Change another property of the car by creating a clone and overriding it, and test that 
// setTimeout still uses the bound value from d)





// 6. Use the Function prototype to add a new delay(ms) function to all functions, which can 
// be used to delay the call to that function by ms milliseconds. 
function multiply(a, b) { 
    console.log( a * b ); 
} 
 
//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

// a)  Use the example multiply function below to test it with, as above, and assume that all 
// delayed functions will take two parameters 


// b)  Use apply to improve your solution so that delayed functions can take any number of 
// parameters 


// c)  Modify multiply to take 4 parameters and multiply all of them, and test that your 
// delay prototype function still works

function Multiply(a, b) { 
    this.a = a,
    this.b = b,
    console.log(a * b)
 }
 
 //Multiply.prototype.delay(500)(5, 5); // prints 25 after 500 milliseconds 
 

//  7. In JavaScript, the toString method is used to convert an object to a string representation.  
// By default, when an object is converted to a String, it returns a string that looks something 
// like [object Object].  
// However, we can define our own toString methods for custom objects to provide a more 
// meaningful string representation. 
 
 

function Person(name, age, gender) { 
    this.name = name; 
    this.age = age; 
    this.gender = gender; 
    this.toString = function () {return 'name:',this.name, 'age:', this.age,'gender:', this.gender};

//     Person.prototype.details = function () {
// console.log('name:',this.name, 'age:', this.age,'gender:', this.gender)
//     }
}

// c)  Create a new constructor function Student that uses call to inherit from Person and 
// add an extra property cohort 
function Student (name, age, gender, cohort) {
    Person.call (this, name, age, gender);
    this.cohort = cohort;
    this.toString = function () {return 'name:',this.name, 'age:', this.age,'gender:', this.gender, 'cohort:',this.cohort};


    // Student.prototype.details = function () {
    //     console.log('name:',this.name, 'age:', this.age,'gender:', this.gender, 'cohort:',this.cohort)
    //         }

};
 
// b)  Test your method by creating 2 different people using the below constructor function 
// and printing them 
const person1 = new Person('James Brown', 73, 'male');
const person2 = new Person('Maddie Duu', 40, 'female');
const person3 = new Person('Dylann Herbst', 23, 'male');

// person2.details();
// person3.details();

// d)  Add a custom toString for Student objects that formats and prints their details. Test 
// with 2 students. 

const studen1 = new Student('Sophie A', 40, 'female', 2);
const studen2 = new Student('Ken E', 40, 'male', 4);

// studen1.details();
// studen2.details();
// console.log('' + studen1)


//onsole.log('person1: '+person1) //prints person1: [object Object] 

// a)  Define a custom toString method for the Person object that will format and print 
// their details
// person1.details();




// 8. The following DigitalClock class uses an interval to print the time every second once 
// started, until stopped. 
class DigitalClock { 
 
    constructor(prefix) { 
        this.prefix = prefix; 
    } 
 
    display() { 
        let date = new Date(); 
        //create 3 variables in one go using array destructuring 
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), 
date.getSeconds()]; 
 
        if (hours < 10) hours = '0' + hours; 
        if (mins < 10) mins = '0' + mins; 
        if (secs < 10) secs = '0' + secs; 
 
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`); 
    } 
 
    stop() { 
        clearInterval(this.timer); 
    } 
 
    start() { 
        this.display(); 
        this.timer = setInterval(() => this.display(), 1000); 
    } 
}
// a)  Create a new class PrecisionClock that inherits from DigitalClock and adds the 
// parameter precision – the number of ms between 'ticks'. This precision parameter 
// should default to 1 second if not supplied. 
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision) {
        super(prefix);
        this.precision = precision ? precision : 1000;
    }
        start() { 
            this.display(); 
            this.timer = setInterval(() => this.display(), this.precision); 
        }

    }

    // b)  Create a new class AlarmClock that inherits from DigitalClock and adds the 
// parameter wakeupTime in the format hh:mm. When the clock reaches this time, it 
// should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should 
// default to 07:00 if not supplied. 
    class AlarmClock extends DigitalClock {
        constructor(prefix, wakeUpTime) {
            super(prefix);
            this.wakeUpTime = wakeUpTime ? wakeUpTime : '07:00'
        }
        checkDisplay() {
            const now = new Date ();
            const hours = this.wakeUpTime.substring(0,2);
            const mins = this.wakeUpTime.substring(3);
            if (now.getHours() == hours && now.getMinutes() == mins) {
                console.log("wake Up");
                this.stop();
            } else {
                this.display();
            }
        }
        start(){
            this.checkDisplay();
            this.timer = setInterval(() => this.checkDisplay(), 1000)
        }
    };
 
const myClock = new DigitalClock('my clock:') 
const myPrecisionClock = new PrecisionClock('my Precision clock:', 10000) 
const myAlarmClock = new AlarmClock('ALARM', '15:41');
// myClock.start() 
//myPrecisionClock.start()
//myAlarmClock.start();


// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below
// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message
// d) Try to update the then and catch messages to include the random delay value

function randomDelay() {
    // your code
    let delay = Math.ceil(Math.random() * 20);
    return new Promise(resolve => setTimeout(resolve, delay*1000));
    }
    randomDelay()
    .then((delay) => console.log('There appears to have been a delay.'));
    function randomDelayB() {
    let delay = Math.ceil(Math.random() * 20);
    return new Promise((resolve, reject) =>
    // if even delay the resolve function, if odd delay the reject function
    setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000));
    }
    randomDelayB()
    .then(() => console.log('Successful delay'))
    .catch(() => console.log('Failed delay'));
    function randomDelayD() {
    let delay = Math.ceil(Math.random() * 20);
    return new Promise((resolve, reject) =>
    setTimeout((delay % 2 === 0) ? resolve : reject, delay*1000, delay));
    }
    randomDelayD()
    
    .then((delay) => console.log('Successful delay of '+delay+' seconds'))
    .catch((delay) => console.log('Failed delay of '+delay+' seconds'));


 
    // 10.Fetch is a browser-based function to send a request and receive a response from a server,
    // which uses promises to handle the asynchronous response.
    // The below fetchURLData uses fetch to check the response for a successful status
    // code, and returns a promise containing the JSON sent by the remote server if successful
    // or an error if it failed. (To run this code in a node.js environment, follow the instructions in
    // the comments before the function.)
    // a) Write a new version of this function using async/await
    // b) Test both functions with valid and invalid URLs
    // c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
    // using Promise.all to combine the results.


    fetchURLData('https://jsonplaceholder.typicode.com/todos/1') //works, prints result
.then(data => console.log(data))
.catch(error => console.error(error.message));
fetchURLData('https://jsonplaceholder.typicode.com/fake') //doesn't exist, prints catch
.then(data => console.log(data))
.catch(error => console.error(error.message));
async function asyncFetchURLData(url) { //a)
let fetchResponse = await fetch(url);

if (fetchResponse.status === 200) {
let responseJson = await fetchResponse.json();
return responseJson;
} else {
throw new Error(`Request failed with status ${fetchResponse.status}`);
}
}
async function asyncFetchMultipleURLData(urls) { //c)
return Promise.all(urls.map(async (url) => {
let response = await fetch(url);
return response.json();
}));
}
try {
let responseData1 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/todos/1');
console.log(responseData1) //works
let responseData2 = await
asyncFetchMultipleURLData(['https://jsonplaceholder.typicode.com/todos/1',
'https://jsonplaceholder.typicode.com/todos/2']);
console.log(responseData2) //works
let responseData3 = await
asyncFetchURLData('https://jsonplaceholder.typicode.com/fake');
console.log(responseData3) //fails
} catch (error) {
console.log(error.message);
}
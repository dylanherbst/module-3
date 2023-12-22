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

printMe = debounce(printMe); //create this debounce function for a) 
 
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
 
car.description(); //works 

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


setTimeout(bindCar, 200);

carCLone2 = {...car, year: 2000}
// c)  Does the delayed description() call use the original values or the new values from 
// b)? Why? // the original


// e)  Change another property of the car by creating a clone and overriding it, and test that 
// setTimeout still uses the bound value from d)
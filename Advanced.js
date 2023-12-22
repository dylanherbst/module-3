// 1 // .NAME Property example

function sayHiDefn() { console.log('Hi (function definition)'); }
const sayHiExpn = function() { console.log('Hi (function expression)'); }
const sayHiArrow = () => console.log('Hi (arrow function)');
//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name) // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name) // sayHiExpn - figures out name from context
console.log(sayHiArrow.name) // sayHiArrow - figures out name from context


// 1 // .LENGTH Property example

function oneParam(a) {
    console.log('This function has a single parameter: '+a)
    }
    function twoParams(a, b) {
    console.log(`This function has two parameters: ${a} and ${b}`)
    }
    function manyParams(a, b, ...extras) {
    console.log(`This function has unlimited parameters: ${a} and ${b} and ${extras}`)
    }
    console.log(oneParam.length) // 1
    console.log(twoParams.length) // 2
    console.log(manyParams.length) // 2, because extras is 'the rest' and can't be counted



// 2 // CUSSTOM PROPERTIES 

    function sayHi() {
        console.log('Hi');
        sayHi.counter++; // increment the custom counter property every time the function is called
        }
        sayHi.counter = 0 // initialise the counter to 0 before calling it
        sayHi() // Hi - calls the function and increments the counter
        sayHi() // Hi - calls the function and increments the counter again
        console.log( `Called ${sayHi.name} ${sayHi.counter} times` ) // Called sayHi 2 times



// 3 // Named Function Expression

// An ordinary Function Expression

     // 0  const sayHi = function(who) { // function reference variable is sayHi, function itself is unnamed
     // 0  console.log(`Hi ${who}`);
     // 0  }
     // 0   console.log(`Name of function ${sayHi.name} is inferred from context`)
        
// A Function Expression with a name

      // 0 const sayHi = function sayHiFunc(who) { // variable is named sayHi, NFE is named sayHiFunc
      // 0  console.log(`Hi ${who}`);
      // 0 }
      // 0  console.log(`Name of function ${sayHi.name} is taken from NFE`)


    // NFE Use Case - internal referencing

     // 0  let sayHi = function sayHiFunc(who) { // NFE, internal name can be used below


// if (who) {
//  0  console.log(`Hi, ${who}!`);
//  0   } else {
//  0   sayHiFunc('guest') // no more errors here
//  0   }
//  0  // 0 }
//  0   sayHi('David') // works, prints Hi, David!
//  0   const guestWelcome = sayHi
//  0   guestWelcome() // works, prints Hi, guest!
//  0   sayHi = null
//  0   guestWelcome() // works, prints Hi, guest! because the NFE reference still exists




// 4 // SCHEDULING - setTimeOut     
    function printMessage(msg) {
        console.log(`Message: ${msg}`)
        }
        //function to be executed, then milliseconds to delay, then arguments for function
        let timerId = setTimeout(printMessage, 1000, 'prints after 1 sec') // Message: prints after 1 sec


    // clearTimeOut
    
    let cancelledTimerId = setTimeout(printMessage, 1000, 'timeout cancelled so never prints')
clearTimeout(cancelledTimerId); // printMessage function is cancelled before delay of 1 second

    // Arrorw Function Version 

     setTimeout( () => console.log("log statement inside arrow function"), 500 )
// prints 'log statement inside arrow function' after 0.5 seconds

    // setInterval

let tickId = setInterval( () => console.log('tick'), 2000 ) // 'tick' every 2s
setTimeout( () => clearInterval(tickId), 10*1000 ) // after 10s ticking stops


    // setTimeOut

    function repeatTimeout(delay, limit)
{
let counter = 1;
// setTimeout only happens once, so we don't need the reference to cancel it
setTimeout(function repeatThis(current) { // named function, so we can refer to it recursively
console.log('repeatTimeout: repeated '+current+' of '+limit+' times');
// but we do need to call setTimeout recursively so that it repeats executing the function
if (current < limit) setTimeout(repeatThis, delay, current+1) //repeat if limit not reached
}, delay, counter);
}
repeatTimeout(2000, 10);


// 5 // Decorators and forwarding 

function printGreeting(name) { // simple undecorated function
    console.log('Hello, ' + name);
    }
    printGreeting('Undecorated')
    function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
    return function (name) { // and returns that function with extra bits - timing/logging
    console.time('Function timer'); // start a timer
    console.log(`\nExecuting function ...`) // log a message
    const result = originalFunction(name); // execute the original function and store result
    console.timeEnd('Function timer'); // stop the timer
    return result; // return the result of running the original function
    }
    }
    // returns the original function WITH the timing/logging features included
    const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
    decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way


   // .bind() 

   const user = {
    name: 'John',
    sayHi() {
    console.log(`Hi, ${this.name}`)
    }
    }
    const boundSayHi = user.sayHi.bind(user) // new function reference with user context explicitly bound
    setTimeout( boundSayHi, 1000 ) // works! Hi, John




// 6 // Getters & Setters 

    // Get example

    const student = {

        // data property
        firstName: 'Monica',
        
        // accessor property(getter)
        get getName() {
            return this.firstName;
        }
    };
    
    // accessing data property
    console.log(student.firstName); // Monica
    
    // accessing getter methods
    console.log(student.getName); // Monica
    
    // trying to access as a method
    // console.log(student.getName()); // error


    // Set example

    const student1 = {
        firstName: 'Monica',
        
        //accessor property(setter)
        set changeName(newName) {
            this.firstName = newName;
        }
    };
    
    console.log(student1.firstName); // Monica
    
    // change(set) object property using a setter
    student1.changeName = 'Sarah';
    
    console.log(student1.firstName); // Sarah


// 7 // Prototype

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
};

Person.prototype.getFullName = function(){
    return this.firstName +" "+ this.lastName;
};

const person1 = new Person("elon", "musk");
const person2 = new Person("Dylan", "Herbst");


console.log(person2);

function People(){
    this.name = "Bill Gates"
}

People.prototype.age = 25;

const people1 = new People();

People.prototype = {age: 52};

const people2 = new People();

console.log(people1);
console.log(people2);
console.log(people1.age); // 25
console.log(people2.age); // 52



// 8 // CLASSES 

// Syntax 

class Character{
    constructor(name){
        this.name = name;
        this.health = health;
        this.inventory = [];
    }};


    // EXTENDS Key Word

    class User {
        constructor(email, name){
            this.email = email;
            this.name = name;
            this.score = 0;
        }
        login() {
            console.log(this.email, 'just logged in');
            return this;
        }
        logout() {
            console.log(this.email, 'just logged out');
            return this;
        }
        updateScore() {
            this.score++;
            console.log(this.email, 'score is now', this.score);
            return this;
        }
    }
// new Admin class inherits all methods and properties from User class
// can now add new methods to Admin class that wont be added to User class
// Also inherits the constructor if we dont put one in the new class
// class User { constructor(email, name){ --> this is on Admin class

    class Admin extends User {
        deleteUser(user){
            users = users.filter(u => {
                return u.email != user.email;

            })

        }


    }

let user1 = new User('dylanemail@email.com', 'dylan');
let user2 = new User('MaddiEnemail@email.com', 'Maddie')
let admin1 = new Admin('ADMINnemail@email.com', 'ADMIN')

let users = [user1, user2, admin1];

admin1.deleteUser(user2);

console.log(users);


    // SUPER Key Word

    // EXAMPLE WITHOUT Have to repeat name and age fot each child class of Animal

    // class Animal {
    //     constructor(name) {

    //     }
    // }

    // class Rabbit extends Animal {

    //     constructor(name, age, runSpeed){
    //         this.name = name;
    //         this.age = age;
    //         this.runSpeed = runSpeed;
    //     }
    // }

    // class Fish extends Animal {

    //     constructor(name, age, swimSpeed){
    //         this.name = name;
    //         this.age = age;
    //         this.swimSpeed = swimSpeed;
    //     }
    // }

    // class Hawk extends Animal {

    //     constructor(name, age, flySpeed){
    //         this.name = name;
    //         this.age = age;
    //         this.flySpeed = flySpeed;
    //     }
    // }

    // const rabbit = new Rabbit('rabbit', 1, 20);
    // const hawk = new Hawk('hawk', 2, 40);
    // const fish = new Fish('fisk', 3, 10);


    // example using SUPER keyword for SUPER constructor 

    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Rabbit extends Animal {

        constructor(name, age, runSpeed){
            super(name, age);
            this.runSpeed = runSpeed;
        }
    }

    class Fish extends Animal {

        constructor(name, age, swimSpeed){
            super(name, age);
            this.swimSpeed = swimSpeed;
        }
    }

    class Hawk extends Animal {

        constructor(name, age, flySpeed){
            super(name, age);
            this.flySpeed = flySpeed;
        }
    }

    const rabbit = new Rabbit('rabbit', 1, 20);
    const hawk = new Hawk('hawk', 2, 40);
    const fish = new Fish('fisk', 3, 10);


    // SUPER Method example 


    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        move(speed){
            console.log(`the ${this.name} moves at a speed of ${speed} km/h`)
        }
    }

    class Rabbit extends Animal {

        constructor(name, age, runSpeed){
            super(name, age);
            this.runSpeed = runSpeed;
        }
        run(){
            console.log(`${this.name} can run`);
            super.move(this.runSpeed);
        }
    }

    class Fish extends Animal {

        constructor(name, age, swimSpeed){
            super(name, age);
            this.swimSpeed = swimSpeed;
        }
        swim(){
            console.log(`${this.name} can swim`);
            super.move(this.swimSpeed);
        }
    }

    class Hawk extends Animal {

        constructor(name, age, flySpeed){
            super(name, age);
            this.flySpeed = flySpeed;
        }
        fly(){
            console.log(`${this.name} can fly`);
            super.move(this.flySpeed);
        }
    }

    // const rabbit = new Rabbit('rabbit', 1, 20);
    // const hawk = new Hawk('hawk', 2, 40);
    // const fish = new Fish('fisk', 3, 10);
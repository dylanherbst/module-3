// 1. Decorator Exercise: Create a simple decorator function that logs the execution time of any 
// function it wraps. Apply this decorator to a function that calculates the sum of all numbers from 1 to 
// N, and demonstrate the time logging when the function is called. 

// Tip: Start by writting a simple function that calculates the sum of numbers from 1 to N (e.g., `function 
// sumToN(n)`). Then, create a decorator funcƟon that takes a funcƟon as an argument, wraps it, and 
// uses `performance.now()` or `Date.now()` to measure and log the Ɵme taken by the function to 
// execute.



function sumTon(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    } return sum;
}

function timed (func) {
    return function (...args) {
        let start = performance.now();
        let result  = func(...args);
        let end = performance.now();
        console.log(`Execution time for function ${func.name}: ${end - start} milliseconds`);
        return result;
    }

    
}

const example = timed(sumTon);

console.log(example(11));


// 2. FuncƟon Binding Exercise: Define an object with a method that refers to `this`. Extract this 
// method into a standalone funcƟon and demonstrate how it loses its context. Then, use `.bind()` to 
// permanently bind this method back to the original object, and show how it regains context. 

// Tip: Define an object with a method that uses `this` (e.g., an object represenƟng a person with a 
// method to say their name). Then, extract this method into a standalone variable and observe how 
// `this` is lost. Use the `bind` method on the funcƟon, passing the original object, to bind `this` 
// correctly.

const person = {
    name: 'ALICE',
    sayName: function () {
        console.log(this.name)
    }
};


setTimeout(person.sayName, 100);
setTimeout( () => person.sayName(), 100);

const bind = person.sayName.bind(person);
setTimeout(bind, 100);


// 3. Managing 'this' in Different Contexts: Create a funcƟon that relies on the `this` context and 
// behaves differently when called as a method of an object versus when called standalone. Illustrate 
// this by aƩaching the funcƟon to an object and also calling it as a global funcƟon. Use `.call()` and 
// `.apply()` to manipulate the context of `this` and achieve the desired outputs. 

// Tip: Write a funcƟon that logs a property of `this` (e.g., `this.name`). Call the funcƟon in the global 
// context (not aƩached to any object) to see how `this` changes. Then, use `call` and `apply` to call this 
// funcƟon with explicit `this` values to control its output.




const obj = {contextProp: 'Obj Context'};

function show (text) {
    console.log(this.contextProp, text);
}


function add (np, text) {
    console.log(this.contextProp, np, text);
}


show.call(obj, 'ss');
add.apply(obj, ['newProp', 'Added w/ .apply']);



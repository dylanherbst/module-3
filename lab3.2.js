// 1. Create a function that takes a string as a parameter and returns the string with the first 
// character of each word changed into a capital letter, as in the example below. Test it with 
// different strings. 
 
 
//console.log(ucFirstLetters("los angeles") ) //Los Angeles 

let caps = function(string) {
console.log(string.charAt(0).toUpperCase() + string.slice(1))
};

// caps('hello people')
 
 
// 2. Create a function truncate(str, max) that truncates a given string of text if its total 
// length is greater than the max length. It should return either the truncated text, with an 
// ellipsis (...) added to the end if it was too long, or the original text otherwise. 
// b)  Write another variant of the truncate function that uses a conditional operator. 
 
function truncate(str, max) {
    if (max > str.lenght) {
        return str.length > max;
    } else {
        return str.slice (0, max) + '...';
    }

}
console.log(truncate('This text will be truncated if it is too long', 25 )) 
 
 
// 3. Use the following animals array for the below tasks. Test each one by printing the result to 
// the console. Review the following link for tips: 
// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array  
// a)  Add 2 new values to the end 
// b)  Add 2 new values to the beginning 
// c)  Sort the values alphabetically 
// d)  Write a function replaceMiddleAnimal(newValue) that replaces the value in the 
// middle of the animals array with newValue 
// e)  Write a function findMatchingAnimals(beginsWith) that returns a new array 
// containing all the animals that begin with the beginsWith string. Try to make it work 
// regardless of upper/lower case. 

const animals = ['Tiger', 'Giraffe'] 
console.log(animals)

animals.push('Dog','Cat');
console.log(animals)

animals.unshift('Horse', 'Cow')
console.log(animals);

function alpha() {
    animals.sort((a1, a2) => {
    if (a1 > a2) {
        return 1;
    } else if (a1 < a2){
        return -1
    } else {
        return 0;
    }
});
    let ordered = animals.map(animal=> animal.charAt(0));
    return ordered;
}

const firstLet = alpha();
console.log(firstLet);
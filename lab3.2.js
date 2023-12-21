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
//console.log(truncate('This text will be truncated if it is too long', 25 )) 
 
 
// 3. Use the following animals array for the below tasks. Test each one by printing the result to 
// the console. Review the following link for tips: 
// https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Global_Objects/Array  


const animals = ['Tiger', 'Giraffe'] 
// console.log(animals)

 // a)  Add 2 new values to the end 
animals.push('Dog','Cat');
// console.log(animals)

// b)  Add 2 new values to the beginning
animals.unshift('Horse', 'Cow')
// console.log(animals);

// c)  Sort the values alphabetically 
// function alpha(arr) {
//     let ordered = arr.map(item => item.charAt(0));
//     return ordered;
// };


// c)  Sort the values alphabetically
function order (list) {
    list.sort ();
    let ordered = list.map(alpha => alpha.charAt(0));
    return ordered;
}// console.log(order(alpha(animals)));


// d)  Write a function replaceMiddleAnimal(newValue) that replaces the value in the 
// middle of the animals array with newValue 
function replaceMiddleAnimal(arr, newValue) {
    let middle = Math.floor(arr.length / 2);
    arr[middle] = newValue; 
    console.log(arr[middle]);
    return arr;
}

// console.log(replaceMiddleAnimal(animals, 'Bat'));
// console.log(animals)

function order(list) {
    list.sort ();
    let ordered = list.map(alpha => alpha.charAt(0));
    return ordered;
}

// function search (arr, letter) {

//     let firstLetters = arr.map(alpha => alpha.charAt(0));
//     if (firstLetters.includes(letter)) {
//     return  letter }
//     else {
//         return console.log('letter not found');
//     }
//  // console.log(search(animals, 'C'));
// }

// e)  Write a function findMatchingAnimals(beginsWith) that returns a new array 
// containing all the animals that begin with the beginsWith string. Try to make it work 
// regardless of upper/lower case. 

function search (arr, letter) {

let firstLetters = arr.filter(str => str = str.startsWith(letter));
return firstLetters; 
}

console.log(search(animals, 'C'));



// 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 
// 'margin-left' into camel-cased 'marginLeft'. 
// The function should remove all dashes, and uppercase the first letter of each word after a 
// dash.

// console.log(camelCase('margin-left')) // marginLeft 
// console.log(camelCase('background-image')) // backgroundImage 
// console.log(camelCase('display')) // display


// b) Create variants of the camelCase function that use different types of for loops, and  
// c) with and without the conditional operator. 
function camelCase(cssProp) {
    return cssProp.split('-').map((word, index) => {
        if (index == 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    }) .join('');
} 




// 5. Decimal number operations in JavaScript can lead to unexpected results, as in the 
// following: 
 
let twentyCents = 0.20 
let tenCents = 0.10  
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)  

// 0.2 + 0.1 = 0.30000000000000004 
// We can sometimes avoid this using the toFixed function to force the number of decimal 
// places as below, but it’s not always useful: 

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 
 
//console.log(fixedTwenty + fixedTen) //why is this not working? 
// console.log(0.3 == currencyAddition(0.1, 0.2)) // true 
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

// b)  Create a function currencyAddition(float1, float2) which safely adds the two 
// decimal numbers float1 and float2 and returns the correct float result. 
function moneyAdd(a, b) {
    const factor = Math.pow(10, 10); // You can adjust the factor for precision
    console.log((a * factor + b * factor) / factor);
}
//moneyAdd(tenCents, twentyCents);


// c)  Create a function currencyOperation(float1, float2, operation) which 
// safely performs the given operation (either +, -, / or *) on the two numbers and returns 
// the correct float result. https://developer.mozilla.org/en-
// US/docs/Web/JavaScript/Reference/Statements/switch may be useful. 
function currencyOperation(float1, float2, operation) {
    const factor = Math.pow(10, 10); 
    console.log((float1 * factor, operation, float2 * factor) / factor);
}

function currencyOperation(float1, float2, operation) {
    const factor = Math.pow(10, 10);
    if (operation === 'add') {
        return float1 * factor + float2 * factor / factor
    } else if (operation === 'subtract') {
        return  float1 * factor - float2 * factor / factor
    }else if (operation === 'divide') {
        return  float1 * factor / float2 * factor / factor
    } else if (operation === 'multiply') {
        return float1 * factor * float2 * factor / factor
    } 
} // currencyOperation(tenCents, twentyCents, 'add' );



// d)  (Extension) Extend the above function to include a fourth argument numDecimals 
// which allows the operation to support different amounts of decimal places from 1 to 10. 
function currencyOperation(float1, float2, operation, numDecimals) {

    numDecimals = Math.min(Math.max(numDecimals, 1), 10);

    const factor = Math.pow(10, numDecimals);

    switch (operation) {
        case 'add':
            return (float1 * factor + float2 * factor) / factor;
        case 'subtract':
            return (float1 * factor - float2 * factor) / factor;
        case 'multiply':
            return (float1 * factor * float2) / factor;
        case 'divide':
            if (float2 !== 0) {
                return (float1 * factor) / (float2 * factor);
            } else {
                return 'Cannot divide by zero';
            }
        default:
            return 'Invalid operation';
    }
}


// 6. Create a function unique(duplicatesArray) which takes an array parameter that may 
// include duplicates. Your function should return an array containing only the unique values 
// from duplicatesArray.  
// Test with the following arrays and create another one of your own. 
 
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'] 
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43] 
const cities = ['perth', 'paris', 'tokyo','tokyo']
 
// console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ] 
// console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ] 


function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)]
};

let newColoursArr = unique(colours);
let newTestScores = unique(testScores);
let newCities = unique(cities);

// console.log(newColoursArr);
// console.log(newTestScores);


// 7. Use the following array of book objects to practice the array functions for map, find and 
// filter. Test each of your answers to the below tasks. 
const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
]; 




// a)  Write a function getBookTitle(bookId) that uses the find function to return the 
// title of the book object with the matching id. 
function getBookTitle(books) {
    for (let book of books) {
        console.log(`ID: ${book.id}, Title: ${book.title}`);
    }
} //getBookTitle(books);

function addGenre() {
   return books.map(book => { return {...book, Genre: 'Classic' };
});
}

// c)  Write a function addGenre() that uses the map function to add a new genre property 
// to all of the above books, with the value ‘classic’. 

let newBooks = addGenre(books);

function getBookGenre(newBooks) {
    for (let book of newBooks) {
        console.log(`Title: ${book.title}, Genre: ${book.Genre}`);
    }
}// getBookGenre(newBooks);


// d)  (Extension) Write a function getTitles(authorInitial) that uses map and 
// filter together to return an array of book titles for books written by authors whose
function search(books, name) {
    let match = books.find(book => book.author === name) 
   if (match) {
    return match.title;
   }
}  //console.log(search(books, 'Harper Lee'));



// e)  (Extension) Write a function latestBook() that uses find and forEach to get the 
// book with the most recent publication date.
function latestBook(books) {
    books.sort((a, b) => a.year - b.year);
books.forEach(book => {
   console.log(`title: ${book.title}, year: ${book.year}`)
})
}; // latestBook(books)

// 8. The following code creates a new Map object for storing names beginning with A, B, or C 
// with their phone numbers. 
const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343')  
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182') 
 
// a)  Create a new phoneBookDEF Map to store names beginning with D, E or F 
// b)  Initialise the contents of phoneBookDEF by passing in an array of keys/values 

const phoneBookDEF = new Map()
phoneBookDEF.set('Dan', '041277343')  
phoneBookDEF.set('Emily', '046661117') 
phoneBookDEF.set('Frank', '045551182') 

// c)  Update the phone number for Caroline 
// phoneBookABC.set('Caroline', '0499999999');


// d)  Write a function printPhoneBook(contacts) that prints the names and phone 
// numbers in the given Map 
function printPhoneBook(contacts) {
    for (let name of contacts) {
        console.log(name);
    }};
    // printPhoneBook(phoneBookABC);

    // e)  Combine the contents of the two individual Maps into a single phoneBook Map 

    const phoneBookALL = new Map();
    phoneBookALL.set(phoneBookABC, phoneBookDEF);

    // f) Print out the full list of names in the combined phone book 
    // printPhoneBook(phoneBookALL);

    


// 9. Given the below salaries object, perform the following tasks. 
let salaries = { 
    "Timothy" : 35000, 
    "David" : 25000, 
    "Mary" : 55000, 
    "Christina" : 75000, 
    "James" : 43000 
}; 

// a)  Write a function sumSalaries(salaries) that calculates and returns the total of all salaries 

function sumSalaries(salaries) {
    let sum = 0;
for (const key in salaries) {
    if (typeof salaries[key] === 'number') {
sum += salaries[key];
    }
} return sum
}

const sum = sumSalaries(salaries);
//console.log(sum);


// b)  Write a function topEarner(salaries) that calculates and returns the name of the person 
// earning the highest salary 
function topEarner(salaries) {
let earn = Object.entries(salaries);
    earn.sort((a, b) => b[1] - a[1]);
return earn[0];
};

//console.log(topEarner(salaries));


 
// 10. The following code uses the Date object to print the current time and the number of hours 
// that have passed today so far. Extend the code to do the following: 

const today = new Date(); 
// console.log('Current time is ' + today.toLocaleTimeString()) 
 
// console.log(today.getHours() + ' hours have passed so far today') 
 

// a)  Print the total number of minutes that have passed so far today 
// console.log(today.getSeconds() + ' seconds have passed so far today') 


// b)  Print the total number of seconds that have passed so far today 
// console.log(today.getMinutes() + ' minutes have passed so far today') 



// c)  Calculate and print your age as: 'I am x years, y months and z days old' 
function myBdayYears() {
    let years = daysInBetween("2000-05-21", "2023-12-21") / 365;
    return years;
}
function myBdayMonths() {
    let years = daysInBetween("2000-05-21", "2023-12-21") / 30;
    return years;
}
function myBdayWeeks() {
    let weeks = daysInBetween("2000-05-21", "2023-12-21") / 7;
    return weeks;
}

// console.log(myBdayMonths());
// console.log(myBdayYears());
// console.log(myBdayWeeks());

// d)  Write a function daysInBetween(date1, date2) which calculates and returns the amount 
// of days in between the two given dates. 

function daysInBetween(d1, d2)  {
    let date2 = new Date (d2);
    let date1 = new Date (d1);
let result = date2 - date1;
return result / (1000 * 60 * 60 * 24)
}
console.log(daysInBetween("2000-05-21", "2023-12-21"));
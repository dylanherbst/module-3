// title, author, price
class Book {
    #title;
    #author;
    #price;

    constructor(title, author, price) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
    get title () {
        return this.#title;
    };

    set title(newTitle) {
        if (newTitle === '' || typeof value === 'number') {
            throw new Error('Title cannot be empty or Number');
        } else {
            this.#title = newTitle;
        }
    }
    get author () {
        return this.#author;
    };

    set author(newAuthor) {
        if (newAuthor === '' || typeof value === 'number') {
            throw new Error('Author cannot be empty or Number');
        } else {
            this.#author = newAuthor;
        }
    }
    get price () {
        return this.#price;
    };

    set price(newPrice) {
        if (newPrice === '' || newPrice <= 0) {
            throw new Error('Check Price');
        } else {
            this.#price = newPrice;
        }
    }
}

const book1 = new Book("1984", "George Orwell", 15.99);
// console.log(book1.title); 
// console.log(book1.author); 
// console.log(book1.price); 
// book1.title = "power Vs force";

//console.log(book1.title); 
// const book2 = new Book("1984", "George Orwell", -10);
// console.log(book2.price);

// Object.getOwnPropertyDescriptor(book1, 'title');
// delete book1.title;
// console.log(book1.title); 

// function look (book1) {
// for (let prop in book1) {
//     console.log(`${prop} in ${book1[prop]}`)
// }}


function look(book) {
    console.log(`title: ${book.title}`);
    console.log(`author: ${book.author}`);
    console.log(`price: ${book.price}`);
}
look(book1);

//class Book {

    //     constructor(title, author, price) {
    //       this._title = '';
    //       this._author = '';
    //       this._price = 0;
    //     }
    //     get title () {
    //         return this._title;
    //     };
    
    //     set title(newTitle) {
    //         if (newTitle === '' || typeof value === 'number') {
    //             throw new Error('Title cannot be empty or Number');
    //         } else {
    //             this._title = newTitle;
    //         }
    //     }
    //     get author () {
    //         return this._author;
    //     };
    
    //     set author(newAuthor) {
    //         if (newAuthor === '' || typeof value === 'number') {
    //             throw new Error('Author cannot be empty or Number');
    //         } else {
    //             this._author = newAuthor;
    //         }
    //     }
    //     get price () {
    //         return this._price;
    //     };
    
    //     set price(newPrice) {
    //         if (newPrice === '' || newPrice <= 0) {
    //             throw new Error('Check Price');
    //         } else {
    //             this._price = newPrice;
    //         }
    //     }
    // }
// Exercise 1: Basic Object with Getters and Setters 
// Objective: Create a class `Product` with properties `name`, `price`, and `description`, using getters 
// and setters. 
// Tip: Start by defining the class with constructor arguments and implement getters and setters for 
// each property. 
// TIP 2: You will make your life easier if you have every class in these exercises in its own file 

class Product {
    #stockCount;
    constructor (name, price, decription) {
        this._name = name;
        this._price = price;
        this._decription = decription
        this.#stockCount = 0;
    }

    static compare(p1, p2) {
        if (p1.price > p2.price) {
            return `${p1.name} is more expensive than ${p2.name}`;
        } else {
            return `${p1.name} isnt more expensive ${p2.name}`;
        }
    }
    get stockCount () {
        return this.#stockCount;
    }
    set newStockCount (num) {
        this.#stockCount += num;
        return this.#stockCount;
    }

    get name () {
        return this._name;
    };

    set name(newName) {
        if (newName === '' || typeof newName === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._name = newName;
        }
    }
    get price () {
        return this._price;
    };

    set price(newPrice) {
        if (typeof newPrice === '' || newPrice <= 0) {
            throw new Error('Error Try Again');
        } else {
            this._price = newPrice;
        }
    }
    get decription () {
        return this._decription;
    };

    set decription(newDecription) {
        if (newDecription === '' || typeof newDecription === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._decription = newDecription;
        }
    }
}


   class TV extends Product {
    constructor (name, price, decription, screenSize, display) {
        super (name, price, decription);
        this.screenSize = screenSize;
        this.display = display;

    }
   }
   class Shirt extends Product {
    constructor (name, price, size, color) {
        super (name, price, decription);
        this.size = size;
        this.color = color;

    }
}
class Book extends Product  {
    constructor (name, price, year, author) {
        super (name, price);
    this.year = year;
    this.author = author;
    this.name = name;
    }
}


//Exercise 8: Simulating Transactions and Handling Errors
   class Cart {
    #discount= new Map();;
    constructor() {
        // this.item = item;
        this.cartItems = [];
    
    }

        addItem(product, quantity) {
            if (product instanceof Product && typeof quantity === 'number' && quantity > 0) {
            this.cartItems.push({product, quantity});
            console.log(`${quantity}:${product.name} has been added to your cart`);
            console.log(`Product Details: Name - ${product.name}, Price - $${product.price}, Description - ${product.description}`);

            } else {
                throw new Error ("Invalid item. Only Product instances can be added to the cart.");
            }
        }


        displayCart() {
            console.log(`You have the following items in your cart:`);
            this.cartItems.forEach(({product, quantity}) => {
                console.log(`${quantity} x ${product.name}`)
            });
        }

        removeItemByName(name, amount) {
            this.cartItems = this.cartItems.map(item => {
                if (item.product.name == name) {
                    return {...item, quantity: Math.max(item.quantity - amount, 0) };
                } else {
                    return item }}).filter(item => item.quantity > 0);
        }


        CalculateTotal(useCode) {
            let totalP = this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
           
            if (useCode && this.checkDiscountCode(useCode)) {
                const result = this.#discount.get(useCode).percentage;
                totalP *= (1 - result);
                //console.log(`${useCode}: discount is ACTIVE`);
        }   
          totalP = parseFloat(totalP.toFixed(2));  
        console.log(`Your Total: $${totalP}`);
        return totalP
    }


        sortByPrice () {
            this.cartItems.sort((a, b) => a.product.price - b.product.price);
            this.cartItems.forEach(({product, quantity}) => {
                console.log(`Name: ${product.name} Price: $${product.price} Amount: ${quantity}` ) 
            })
}      


addDiscount(code, isApplied, percentage) {
     if (percentage < 1) {
        this.#discount.set(code, {isApplied, percentage})}
        else {
            throw new Error ("INVALID")
        }
}

checkDiscountCode(code) {

    console.log(`${code}: discount is ACTIVE`)
    return this.#discount.has(code);
    }
 
// } else {
//         console.log(`${code} Discount Code`)
//         return false;
    
//     }
}
;


// // // PRODUCTS LIST // // //

const samsung89 = new Product("samsung10k", 10000, "samsung Flat Tv", "89inch", "led") 

const nikeShirt = new Product("nikeShirt-DriFit", 80, "XL", "black")

// // // PRODUCTS LIST // // //


//console.log(samsung89)
// const tv2 = new Product("samsung23k", 2300000, "samsung Flat Tv", "89inch", "led")
//console.log(tv2)
//let compare1 = Product.compare(samsung89, tv2);
//console.log(compare1);

// Exercise 2: Prototypal Inheritance 
// Objective: Create classes `TV` and `Shirt` that inherit from `Product`. Add specific properties like 
// `screenSize` for `TV` and `size` for `Shirt`. 
// Tip: Use the `extends` keyword for inheritance and `super` to call the parent constructor.



// Exercise 3: Using Constructor Functions 
// Objective: Create a new class `Book` using a constructor function, not ES6 classes, with properties 
// and a prototype method to display its info. 
// Tip: Define properties inside the constructor function and methods on the prototype. 


// makeBook.prototype.displayInfo = function() {
//     console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
// };
// let newBook = new makeBook(2000, "Harry Potter 1", "Rol Dahl");

//newBook.displayInfo(); 


// Exercise 4: Static Methods in Class 
// Objective: Add a static method ‘Compare’ to `Product` that compares two products based on price. 
// Tip: Define a static method inside the `Product` class that takes two `Product` instances as 
// arguments

// Exercise 5: Implementing Error Handling 
// Objective: In the `Product` class, add error handling to ensure that the price is always a positive 
// number. 
// Tip: Throw an error in the setter for `price` if a negative value is passed.




let customer1 = new Cart("customer1");
customer1.addItem(samsung89, 3);
customer1.addItem(nikeShirt, 4);
// customer1.displayCart();
// customer1.CalculateTotal();

customer1.addDiscount('10off', true, 0.1);
customer1.addDiscount('90off', true, 0.90);
//customer1.checkDiscountCode('10off');
//customer1.CalculateTotal('90off');
customer1.displayCart();
let powerVsForce = new Book ("Power Vs Force by Dr Hawkins", 50, 2000, "Dr Hawkins")

//customer1.CalculateTotal('10off');
customer1.CalculateTotal();
customer1.removeItemByName('samsung10k', 2);
customer1.displayCart();
customer1.sortByPrice();
customer1.addItem(powerVsForce, 3);
customer1.displayCart();

console.log(powerVsForce)
// else {   console.log(`${useCode} Invalid Discount Code`)
// return false;
// }

// // // PRODUCTS LIST // // //

// const samsung89 = new Product("samsung10k", 10000, "samsung Flat Tv", "89inch", "led") 

// const nikeShirt = new Product("nikeShirt-DriFit", 80, "XL", "black")

// // // PRODUCTS LIST // // //
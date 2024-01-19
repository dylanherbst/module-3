
class Product {
    #stockCount;
    constructor (title, price, decription) {
        this._title = title;
        this._price = price;
        this._decription = decription
        this.#stockCount = 0;
    }

    static compare(p1, p2) {
        if (p1.price > p2.price) {
            return `${p1.title} is more expensive than ${p2.title}`;
        } else {
            return `${p1.title} isnt more expensive ${p2.title}`;
        }
    }
    get stockCount () {
        return this.#stockCount;
    }
    set newStockCount (num) {
        this.#stockCount += num;
        return this.#stockCount;
    }

    get title () {
        return this._title;
    };

    set title(newtitle) {
        if (newtitle === '' || typeof newtitle === 'number') {
            throw new Error('Error Try Again');
        } else {
            this._title = newtitle;
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
    constructor (title, price, decription, screenSize, display) {
        super (title, price, decription);
        this.screenSize = screenSize;
        this.display = display;

    }
   }
   class Shirt extends Product {
    constructor (title, price, size, color) {
        super (title, price, decription);
        this.size = size;
        this.color = color;

    }
}
class Book extends Product  {
    constructor (title, price, year, author) {
        super (title, price);
    this.year = year;
    this.author = author;
    this.title = title;
    }
}


   class Cart {
    #discount= new Map();;
    constructor() {
        this.cartItems = [];
    
    }

        addItem(product, quantity) {
            if (product instanceof Product && typeof quantity === 'number' && quantity > 0) {
            this.cartItems.push({product, quantity});
            console.log(`${quantity}:${product.title} has been added to your cart`);
           // console.log(`Product Details: title - ${product.title}, Price - $${product.price}, Description - ${product.description}`);

            } else {
                throw new Error ("Invalid item. Only Product instances can be added to the cart.");
            }
        }


        displayCart() {
            console.log(`You have the following items in your cart:`);
            this.cartItems.forEach(({product, quantity}) => {
                console.log(`${quantity} x ${product.title}`)
            });
        }

        removeItemBytitle(title, amount) {
            this.cartItems = this.cartItems.map(item => {
                if (item.product.title == title) {
                    return {...item, quantity: Math.max(item.quantity - amount, 0) };
                } else {
                    return item }}).filter(item => item.quantity > 0);
        }


        CalculateTotal(useCode) {
            let totalP = this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
           
            if (useCode && this.checkDiscountCode(useCode)) {
                const result = this.#discount.get(useCode).percentage;
                totalP *= (1 - result);
        }   
          totalP = parseFloat(totalP.toFixed(2));  
        console.log(`Your Total: $${totalP}`);
        return totalP
    }


        sortByPrice () {
            this.cartItems.sort((a, b) => a.product.price - b.product.price);
            this.cartItems.forEach(({product, quantity}) => {
                console.log(`title: ${product.title} Price: $${product.price} Amount: ${quantity}` ) 
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
 

};

// // API FETCH // //


async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data.map(item => new Product(item.title, item.price, item.description));
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of an error
    }
}


fetchProducts().then(products => {
    products.forEach(product => {
        console.log(`title: ${product.title}, Price: $${product.price}, Description: ${product.decription}`);
    });
});

  // // API FETCH // //



// // // PRODUCTS LIST // // //

const samsung89 = new Product("samsung10k", 10000, "samsung Flat Tv", "89inch", "led") 

const nikeShirt = new Product("nikeShirt-DriFit", 80, "XL", "black")

let powerVsForce = new Book ("Power Vs Force by Dr Hawkins", 50, 2000, "Dr Hawkins")

// // // PRODUCTS LIST // // //


// // // New customer/cart  // // //

let customer1 = new Cart("customer1");

// // // New customer/cart  // // //


// // // Add Items // // //

customer1.addItem(samsung89, 3);
customer1.addItem(nikeShirt, 4);
customer1.addItem(powerVsForce, 3);

// // // Add Items // // //



// // // Add Discount // // //

//customer1.addDiscount('10off', true, 0.1);
//customer1.addDiscount('90off', true, 0.90);
//customer1.checkDiscountCode('10off');
//customer1.checkDiscountCode('90off');

// // // Add Discount  // // //


// // // CHECKOUT PROCCESS  FUNCTIONS // // //

function validateCart(cart) {
    // Implement validation logic (return true if valid)
    return cart.cartItems.length > 0;
  }
  
  function processPayment(cart) {
    // Simulate payment processing
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true });
      }, 1000);
    });
  }
  
  function finalizeOrder(cart) {
    // Simulate order finalization
    return new Promise(resolve => {
      setTimeout(() => {
        // Generate a unique order ID for demonstration
        const orderId = 'ORDER-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        resolve({ success: true, orderId });
      }, 1000);
    });
  }
  
// // // CHECKOUT PROCCESS FUNCTIONS  // // //


// // // CHECKOUT PROCCESS ASYNC // // //

async function checkoutProcess(cart) {
    try {
        // Validate cart contents
        if (!validateCart(cart)) {
            throw new Error('Invalid cart items');
        }

        // Process payment (simulated with a timeout)
        const paymentResult = await processPayment(cart);
        if (!paymentResult.success) {
            throw new Error('Payment failed');
        }

        // Finalize order
        const orderResult = await finalizeOrder(cart);
        if (orderResult.success) {
            console.log('Order completed successfully', orderResult.orderId);
        } else {
            throw new Error('Order finalization failed');
        }

        return orderResult;
    } catch (error) {
        // Handle any errors that occur during the checkout
        console.error('Checkout process error:', error);
        return { success: false, error: error.message };
    }
}

// // // CHECKOUT PROCCESS ASYNC // // //



// customer1.sortByPrice();
// customer1.displayCart();

checkoutProcess(customer1).then(result => {
    if (result.success) {
      console.log('Checkout successful:', result);
    } else {
      console.log('Checkout failed:', result.error);
    }
  });
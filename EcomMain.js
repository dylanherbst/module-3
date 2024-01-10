let products = [
    {id: 1, name: 'DriFit T-Shirt', price: 40},
    {id: 2, name: 'tech-fleece', price: 120},
    {id: 3, name: 'cargo shorts', price: 80},
    {id: 4, name: 'Jordan 1s', price: 210},
    {id: 5, name: 'Tns', price: 200},
    {id: 6, name: 'Dunks', price: 160},
    {id: 7, name: '95s', price: 180},
]

function sortByPrice () {
    products.sort((a, b) => a.price - b.price);
    products.forEach(product => {
        console.log(`Name: ${product.name} Price: $${product.price}`) 
    })
}
sortByPrice();

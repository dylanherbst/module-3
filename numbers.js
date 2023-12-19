console.log(0.1 + 0.4)

let x = 0.1 + 0.2;
let num = x.toFixed(2);
console.log(num);


function moneyAdd(a, b) {
    const factor = Math.pow(10, 10); // You can adjust the factor for precision
    return (a * factor + b * factor) / factor;

}

let amount = moneyAdd(0.02, 0.01);
console.log(amount); 

function preciseAdd(a, b) {
    const factor = Math.pow(10, 10); // You can adjust the factor for precision
    return (a * factor + b * factor) / factor;
}

let result = preciseAdd(0.1, 0.2);
console.log(result);
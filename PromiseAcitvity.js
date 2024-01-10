// function p1() {
//     setTimeout(() => console.log("Started Pizza prep"), 200);
// }
// function p2() {
//     setTimeout(() => console.log("Made the base"), 400);
// }
// function p3() {
//     setTimeout(() => console.log("Added Sauce and Cheese"), 600);
// }
// function p4() {
//     setTimeout(() => console.log("Added toppings"), 800);
// }
// function p5() {
//     setTimeout(() => console.log("Cooked the Pizza"), 1000);
// }
// function p6() {
//     setTimeout(() => console.log("Pizza is Ready"), 1200);
// }




function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makePizza() {
    await wait(200);
    console.log("Started Pizza prep");

    await wait(400);
    console.log("Made the base");

    await wait(600);
    console.log("Added Sauce and Cheese");

    await wait(800);
    console.log("Added toppings");

    await wait(1000);
    console.log("Cooked the Pizza");

    await wait(1200);
    console.log("Pizza is Ready");
}

makePizza();
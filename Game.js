
class Character { 
    constructor(name){
        this.name = name;
        this.health = 100;
        this.items = [];
        this.inventory = new Inventory(this.items);
    } 

takeDamage(damage) { // Method for charcter takind damge refrenced from item damage element
    this.health -= damage;
    if (this.health < 0) this.health = 0;
}
heal(healing){
    this.health += healing;
}

useHeal (target, itemIndex) {
    const item = this.inventory.items[itemIndex];
    target.heal(item.ItemHealing);
    // const healingMessage = (``)
}


attack(target, itemIndex) {  // Method for target to be attacked and item that will be used 

    if (this.inventory.items[itemIndex]) {

        const item = this.inventory.items[itemIndex];

      const attackMessage = (`${this.name} attacks ${target.name} with a ${item.ItemName} for ${item.ItemDamage} damage!`);
      console.log(attackMessage);
        target.takeDamage(item.ItemDamage);
        return attackMessage;
 
}
}
}

class Item{ 

    constructor(name, type, damage, healing){
        this.ItemName = name;
        this.ItemType = type;
        this.ItemDamage = damage;
        this.ItemHealing = healing;

    }
}

class Inventory{

    constructor(items){
        this.items = items;
    }
    add(item){ // method to push item into items array in charcter 
        this.items.push(item);
    }
}

let Storm = new Character('Storm'); // new character
let Ronin = new Character('Ronin'); // new character

let Sword = new Item('Big Sword', 'Sword', 30); // new item
Storm.inventory.add(Sword); // item being added to charcter



let Axe = new Item('Magic Axe', 'Axe', 45); // new item
Ronin.inventory.add(Axe); // item being added to charcter

let Potion = new Item('health potion', 'healing', 0, 30);



// console.log(`${Storm.name} has a ${Storm.inventory.items[0].ItemName}`); // charcters item refrenced via index number
console.log(`${Ronin.name} has a ${Ronin.inventory.items[0].ItemName}`); // charcters item refrenced via index number

Storm.attack(Ronin, 0); // storm attacks ronin with item index 0 
//console.log(`${Ronin.name} now has ${Ronin.health} health after being attacked by ${Storm.name}.`);

console.log(Ronin.health);
Ronin.inventory.add(Potion);
console.log(`${Ronin.name} has a ${Ronin.inventory.items[1].ItemName}`);
Ronin.useHeal(Ronin, 1);

console.log(Ronin.health);






// const button = document.getElementById('myButton');
// const resultDisplay = document.getElementById('result');

// function updateResult() {
//     const result ='attacked';
//     return result;
// }


// document.getElementById('attackButton').addEventListener('click', function() {
//     const attackResult = Storm.attack(Ronin, 0);
//     document.getElementById('result').textContent = attackResult + `\n${Ronin.name} now has ${Ronin.health} health.`;
// });
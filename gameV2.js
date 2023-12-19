class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.items = [];
    } 


takeDamage(damage) {  // Method for charcter takind damge refrenced from item damage element
    this.health -= damage;
}

attack(target, itemIndex) {  // Method for target to be attacked and item that will be used 

    if (this.items[itemIndex]) {

        const item = this.items[itemIndex];

      console.log(`${this.name} attacks ${target.name} with a ${item.ItemName} for ${item.ItemDamage} damage!`);

        target.takeDamage(item.ItemDamage);
 
} 
}

add(item){ 
    this.items.push(item);
}
};


class Item{
    constructor(name, type, damage){
        this.ItemName = name;
        this.ItemType = type;
        this.ItemDamage = damage;

    }
}

let Storm = new Character('Storm');
let Ronin = new Character('Ronin');

let Sword = new Item('Big Sword', 'Sword', 50);

Storm.add(Sword);

let Axe = new Item('Magic Axe', 'Axe', 45);

Ronin.add(Axe);

console.log(`${Storm.name} has a ${Storm.items[0].ItemName}`);
console.log(`${Ronin.name} has a ${Ronin.items[0].ItemName}`);

Storm.attack(Ronin, 0);
console.log(`${Ronin.name} now has ${Ronin.health} health after being attacked by ${Storm.name}.`);
console.log(Ronin.health)





// class Inventory{
//     constructor(items){
//         this.items = items;
//     }
//     add(item){
//         this.items.push(item);
//     }
// }

    // this.inventory = new Inventory(this.items);
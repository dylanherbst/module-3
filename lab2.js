class Character{
    constructor(name){
        this.name = name;
        this.inventory = [];
    }  

// Add item to front of inventory // Q1
addItems(item){
this.inventory.push(item);
}


// Remove item from end of inventory // Q2
removeLast() {
    this.inventory.pop();
}

// use and discard first item // Q3
useFirstItem () {
    this.inventory.shift()
}


// List all items in Character inventory // Q4
allItems(){  
    this.inventory.forEach((item, index) => {
    console.log(`#${index}: ${item.ItemName}`);
    });
}

// list all specific items in inventory (healing) // Q5
FindHealingItems() {
    let amount = this.inventory.filter(item => item.ItemType == 'Healing');
    console.log(`Number of Healing Items: ${amount.length}`);
}

// list all specific items in inventory (weapons) // Q6
FindWeaponItems() {
    let amount = this.inventory.filter(item => item.ItemType == 'Weapon');
    console.log(`Number of Weapon Items: ${amount.length}`);
}


// sorts weapons by damage from highest to lowestest // Q7 // .sort
sortItems() {
    this.inventory.sort((weapon1, weapon2) => weapon1.ItemDamage - weapon2.ItemDamage );

    let sorted = this.inventory.map(item => item.ItemName);
    console.log(`Weapons in-order of 'Strength' ${sorted}`)
}

// Remove specific items by index // Q8 // .splice

removeItem(index) {

    if (index >= 0 && index < this.inventory.length) {
        let removed = this.inventory.splice(index, 1);
        console.log(`Removed item: ${removed[0].ItemName}`);
}
}

// Prints latest addition to end of inventory // Q9 // .slice
lastAddedItems() {
let lastAdded = this.inventory.slice(-2);
let itemNames = lastAdded.map(item => item.ItemName);
console.log(`Your latestest added items: ${itemNames}`);

}

// Item upgrades and Mods // Q10 // .map

upgradedDamage(damageIncrease) {
    this.inventory = this.inventory.map (item => {
        return {
            ...item,
            ItemDamage: item.ItemDamage + damageIncrease};
        
});
}
// Total damage capabilities // Q11 // .reduce
totalWeaponsDamage() {
    let total = this.inventory.reduce((currentDamage, currentWeapon) => currentDamage + currentWeapon.ItemDamage, 0);
    console.log(`Your wepaons total damage capabilities are ${total}`);

}

// Total healing capabilities // Q11 // .reduce
totalHealing() {
    let total = this.inventory.reduce((currentHealing, currentItem) => currentHealing + currentItem.ItemHealing, 0);
    console.log(`Your total healing capabilities are ${total}`);

}

// list all items and details in charcter inventory // 
printInventoryItems() {
    this.inventory.forEach((item, index) => {
        console.log(`Item ${index}:`);
        for (let key in item) {
            console.log(`  ${key}: ${item[key]}`);
        }
    });
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

// Usage example



let Storm = new Character('Storm'); // new character
let Ronin = new Character('Ronin'); // new character

let Sword = new Item('Big Sword', 'Weapon', 30); // new item
Storm.addItems(Sword); // item being added to charcter

 

let Axe = new Item('Magic Axe', 'Weapon', 45, 0); // new item
Ronin.addItems(Axe); // item being added to charcter
Storm.addItems(Axe);


let Potion = new Item('health potion', 'Healing', 0, 30); // new item
Ronin.addItems(Potion); // item being added to charcter

Storm.addItems(Potion); // item being added to charcter


// console.log(Ronin.inventory);
// Ronin.useFirstItem();
// console.log(Ronin.inventory);
// Ronin.allItems();
// Ronin.FindHealingItems();
// Storm.FindWeaponItems();
// Storm.sortItems();

Storm.allItems();
Storm.removeItem(0, 1);
Storm.allItems();
Storm.lastAddedItems();
Storm.upgradedDamage(50);
Storm.printInventoryItems();
Storm.totalWeaponsDamage();
Storm.totalHealing();
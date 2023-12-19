class Characters {
    constructor(name){
        this.name = name;
        this.health = health;
        this.items = [];
    }

takeDamage (itemDamage) {
this.health -= itemDamage;
}

attack(target, itemIndex){


    const item = this.items[itemIndex];
    target.takeDamage(item.ItemDamage);
}
}



class Item {
    constructor(itemName, type, itemDamage,  ){
        this.name = itemName;
        this.type = type;
        this.damage = itemDamage;
    }

    add(item){
        this.items.push(item)
    }
}


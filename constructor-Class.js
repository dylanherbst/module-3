class Animal {
    constructor(name, hasFur, isFriendly){
        this.hasFur = hasFur;
        this.name = name;
        this.isFriendly = isFriendly;
    }
    doesHaveFur(){     // Method
        return 'test';
    };
    isItFriendly() {   // Method
        return this.isFriendly == true
    };
    describe() {      // Method/ Helper Fucntion
        console.log(`${this.name} has fur: ${this.doesHaveFur()} and is it friendly?: ${this.isItFriendly()}`)
    }

}

let snake = new Animal('snake', false, false);
let dog = new Animal('dog', true, true);

snake.describe();
dog.describe()
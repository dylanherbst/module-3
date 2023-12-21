// #### Part 1: Monster Collection with `Set`

const monsterCollection = new Set();
monsterCollection.add("Dragon");
monsterCollection.add("Goblin");

function addMonster (monsterCollection, monster) {
        if (monsterCollection.has(monster)) {
            console.log("Monster already in collection");
        } else {
            monsterCollection.add(monster);
        }
};
addMonster(monsterCollection, "Dragon");
addMonster(monsterCollection, "Snake");
addMonster(monsterCollection, "Lion");
addMonster(monsterCollection, "Bull");

// Part 2: Treasure Hunt with `Map`

const treasureMap = new Map();
treasureMap.set("Dragon", "Hidden in the volcano's heart.");
treasureMap.set("Goblin", "Buried under the old oak tree.");
treasureMap.set("Snake", "Buried under a big rock.");
treasureMap.set("Lion", "Under a large body of water");
treasureMap.set("Bull", "Inside an old rundown castle.");


function monsterMessage(treasureMap) {
    for (let [key, value] of treasureMap.entries())
    console.log(`${key}: This monsters secret map says the treasure is... ${value}`) 
};

// monsterMessage(treasureMap);

// Part 3: Secret Messages with `WeakMap`

let player1 = { name: "Alice", charType: "hobbit" };
let player2 = { name: "Nathan", charType: "archer" };
let player3 = { name: "Creed", charType: "knight" };
let player4 = { name: "Creed", charType: "elf"};

let secretMessages = new WeakMap();
secretMessages.set(player1, "Meet at dawn near the ancient ruins."); 
secretMessages.set(player2, "MAHHHHHHHHH."); 

function sendSecret (player, secretMessagesMap, secretMessages) {
   if(player) {
    secretMessagesMap.set(player, secretMessages); 
} else {
    console.log('Not an opt')
}
}
function tellSecret (player) {
    console.log(secretMessages.get (player))
    secretMessages.delete(player);
};


// sendSecret(player3, secretMessages, "booooo");
// sendSecret(player4, secretMessages, "where is the treasure!!!!!");

console.log(secretMessages);
tellSecret(player2);
console.log(secretMessages);



// Part 4: Managing Game Progress with JSON 

const gameState = {monsters: Array.from(monsterCollection), treasures: Array.from(treasureMap), messages: Array.from(secretMessages) };

const gameStateJSON = JSON.stringify(gameState);  

const loadedGameState = JSON.parse(gameStateJSON);

//console.log(gameStateJSON);


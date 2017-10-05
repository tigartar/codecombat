function onHear(event) {
    var message = event.message;
    if (message == "North") {
        pet.say("Htron");
    }
    if (message == "South") {
        pet.say("Htuos");
    }
    if (message == "East") {
        pet.say("Tsae");   
    }    
}
pet.on("hear", onHear);
while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy && enemy.type != "brawler") {
        hero.attack(enemy);
    }
    else {
        hero.moveXY(33, 25);
    }
}
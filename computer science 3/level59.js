function onHear(event) {
    var potion = pet.findNearestByType("potion");
    if (event.message == "Fetch") {
        pet.fetch(potion);
    }
    else {
        pet.moveXY(54, 34);
    }
}
pet.on("hear", onHear);
while(true) {
    var enemy = hero.findNearest(hero.findEnemies());
    if (enemy) {
        hero.attack(enemy);
    }
    else {
        hero.moveXY(40, 34);
    }
}
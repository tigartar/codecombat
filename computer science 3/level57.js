function onHear(event) {
    if (event.speaker == hero) {
        pet.say("WOOF");
    }
}
pet.on("hear", onHear);
while(true) {
    var enemy = hero.findNearestEnemy();
    // If there is an enemy:
    if (enemy) {
        hero.say("WOOF");        
    }
    hero.moveXY(30, 27);
    hero.moveXY(30, 15);
}
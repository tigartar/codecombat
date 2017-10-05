function onSpawn(event) {
    while(true) {
        pet.moveXY(9, 24);
        pet.moveXY(30, 43);
        pet.moveXY(51, 24);
        pet.moveXY(30, 5);
    }
}
pet.on("spawn", onSpawn);
while(true) {
    hero.say("Good dog!");
    hero.say("You can do it!");
    hero.say("Run Run Run!");
    hero.say("Almost!");
    hero.say("One more lap!");
}
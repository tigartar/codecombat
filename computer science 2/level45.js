function onSpawn(event) {
    while(true) {
        pet.moveXY(48,8);
        pet.moveXY(12,8);    
    }
}
pet.on("spawn", onSpawn);
while (true) {
    hero.say("Run!!!");
    hero.say("Faster!");
}
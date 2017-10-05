function onSpawn(event) {
    while (true) {
        var enemy = pet.findNearestEnemy();
        if (enemy) {
            pet.say('run');
        }      
    }
}
pet.on("spawn", onSpawn);
function onSpawn(event){
    while(true) {
        var item = hero.findNearestItem();
        if (item) {
            pet.fetch(item);
        }
    }        
}
pet.on("spawn", onSpawn);
hero.moveXY(78, 35);
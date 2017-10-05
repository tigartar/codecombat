function goFetch() {
    while(true) {
        var potion = hero.findNearestItem();
        if(potion) {
            pet.fetch(potion);
        }
    }
}
pet.on("spawn", goFetch);
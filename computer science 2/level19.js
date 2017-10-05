while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if(hero.isReady("cleave")) {
                hero.cleave();
    } else if(distance < 5) {
        hero.attack(enemy);
        hero.attack(enemy);
    } else {
        hero.attack("Chest");
    }
}
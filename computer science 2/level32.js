function cleaveWhenClose(target) {
    if(hero.distanceTo(target) < 5) {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        // else, just attack target!
        else {
            hero.attack(enemy);
        }
        
    }
}
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        cleaveWhenClose(enemy);
    }
}
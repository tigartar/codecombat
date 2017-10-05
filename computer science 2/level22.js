while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var distance = hero.distanceTo(enemy);
            if(distance < 5) {
               if(hero.isReady("cleave")) {
                hero.cleave();
             } else {
				hero.attack(enemy);
				hero.attack(enemy);
            }
    }
}
}
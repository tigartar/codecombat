while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var distance = hero.distanceTo(enemy);
        if(distance < 5) {
            hero.attack(enemy);
            hero.attack(enemy);
        }
        else {
            hero.shield();
        }
    } else {
        hero.moveXY(40, 34);
    }
}

while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance < 10) {
        hero.attack(enemy);
        hero.attack(enemy);
    }
    else {
        hero.moveXY(40, 39);
    }   
}

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
        hero.attack(enemy);
    }
    else {
        hero.moveXY(40, 33);
    }
}
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        x = hero.pos.x - 10;
        y = hero.pos.y;
        hero.moveXY(x, y);
    } else {
        x = hero.pos.x + 10;
        y = hero.pos.y;
    hero.moveXY(x, y);
    }
}
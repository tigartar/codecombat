while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.buildXY("fence", enemy.pos.x -20, enemy.pos.y);
    } else {
        hero.moveXY(hero.pos.x, hero.pos.y - 10);
    }
}
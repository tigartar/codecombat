while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var yak = hero.findNearestEnemy();
    if (hero.distanceTo(yak) < 10) {
        x = hero.pos.x + 10;
        y = hero.pos.y;
        hero.moveXY(x, y);
    }
}
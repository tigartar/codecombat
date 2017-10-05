function maybeBuildTrap(x, y) {
    hero.moveXY(x, y);
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        hero.buildXY("fire-trap", x, y);
    }
}
while(true) {
    maybeBuildTrap(43, 50);
    maybeBuildTrap(25, 34);
    maybeBuildTrap(43, 19);
}    
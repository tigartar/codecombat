while(true) {
    hero.moveXY(43, 50);
    var top = hero.findNearestEnemy();
    if (top) {
        hero.buildXY("fire-trap", 43, 50);
    }
    hero.moveXY(25, 34);
    if (left) {
        hero.buildXY("fire-trap", 25, 34);
    }
    hero.moveXY(43, 20);
    var bot = hero.findNearestEnemy();
    if (bot) {
        hero.buildXY("fire-trap", 43, 20);
    }  
}
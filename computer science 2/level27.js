function checkAndAttack(target) {
    if(target) {
        hero.attack(target);
    }
    hero.moveXY(43, 34);
}
while(true) {
    hero.moveXY(58, 52);
    var topEnemy = hero.findNearestEnemy();
    checkAndAttack(topEnemy);
    hero.moveXY(57, 16);
    var bottomEnemy = hero.findNearestEnemy();
    checkAndAttack(bottomEnemy);
}
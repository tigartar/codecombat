function checkEnemyOrSafe(target) {
    if (target) {
        hero.attack(target);
    }
        else {
            hero.say("yahoo");
        }
    }
while (true) {
    hero.moveXY(64, 54);
    var enemy1 = hero.findNearestEnemy();
    checkEnemyOrSafe(enemy1);
    hero.moveXY(16, 14);
    var enemy2 = hero.findNearestEnemy();
    checkEnemyOrSafe(enemy2);
}
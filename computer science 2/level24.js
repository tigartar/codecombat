function findAndAttackEnemy() {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
}
}
function findAndCleaveEnemy() {
   var enemy = hero.findNearestEnemy();
    if (enemy) {
    if (hero.isReady('cleave')) {
        hero.cleave(enemy);

}
}
}
while (true) {
    hero.moveXY(35, 34);
    findAndCleaveEnemy();
    findAndAttackEnemy();
    hero.moveXY(60, 31);
    findAndCleaveEnemy();
    findAndAttackEnemy();
}
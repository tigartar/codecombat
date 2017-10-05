function enemyInRange(enemy) {
    if (hero.distanceTo(enemy) < 5) {
        return true;
    }
    return false;
}
function cleaveOrAttack(enemy) {
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } 
    else {
        hero.attack(enemy);
    }
}
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        if (enemyInRange(enemy)) {
            cleaveOrAttack(enemy);
        }
    }
}
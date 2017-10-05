function inAttackRange(enemy) {
    var distance = hero.distanceTo(enemy);
    if (distance <= 3) {
        return true;
    } else {
        return false;
    }
}
while (true) {
    var enemy = hero.findNearestEnemy();
    var canAttack = inAttackRange(enemy);
    if (canAttack) {
        hero.attack(enemy); 
    }
}
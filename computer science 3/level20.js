function nearestEnemyDistance() {
    var enemy = hero.findNearestEnemy();
    var result = 0;
    if (enemy) {
        result = hero.distanceTo(enemy);
    }
    return result;
}
while (true) {
    var enemyDistance = nearestEnemyDistance();
    if (enemyDistance > 0) {
        hero.say(enemyDistance);
    }      
}
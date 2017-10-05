loop {
    var farthest = null;
    var maxDistance = 0;
    var enemyIndex = 0;
    var enemies = this.findEnemies();
    while (enemyIndex < enemies.length) {
        var target = enemies[enemyIndex];
        enemyIndex += 1;
        var distance = this.distanceTo(target);
        if (distance > maxDistance) {
            maxDistance = distance;
            farthest = target;
        }
    }
    if (farthest) {
        while (farthest.health > 0)
        {
            if (this.isReady("cleave")) { this.cleave(farthest); }
            else { this.attack(farthest);}
        }
    }
}
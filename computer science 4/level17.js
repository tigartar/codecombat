loop {
    var enemies = this.findEnemies();
    var enemyIndex = 0;
    while (enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        if (enemy.type != "sand-yak") {
            while (enemy.health > 0) {
                this.attack(enemy);
            }
        }
        enemyIndex++;
    }
    this.moveXY(40, 32);
}

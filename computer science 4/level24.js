while(true) {
    var weakest = null;
    var leastHealth = 99999;
    var enemyIndex = 0;
    var enemies = hero.findEnemies();
    while(enemyIndex < enemies.length) {
        if (enemies[enemyIndex].health < leastHealth) {
            leastHealth = enemies[enemyIndex].health;
            weakest = enemies[enemyIndex];  
    }
            enemyIndex = enemyIndex + 1;
}
    if (weakest) {
        hero.attack(weakest);
    }
}
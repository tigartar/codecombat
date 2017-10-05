var enemies = hero.findEnemies();
var enemyIndex = 0;
while(enemyIndex < enemies.length) {
    if (enemies[enemyIndex].type == 'thrower') {
        hero.attack(enemies[enemyIndex]);
    }
    enemyIndex = enemyIndex + 1;
}
enemies = hero.findEnemies();
enemyIndex = 0;
while(enemyIndex < enemies.length) {
    if (enemies[enemyIndex])
        hero.attack(enemies[enemyIndex]);
    enemyIndex = enemyIndex + 1;
}

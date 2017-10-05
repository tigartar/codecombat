var enemies = hero.findEnemies();
var enemyIndex = 0;
while (true) {
var enemy = enemies[enemyIndex];
if (enemy.type == 'shaman') {
    while (enemy.health > 0) {
        hero.attack(enemy);
    }
}
    enemyIndex += 1;
    hero.say(enemy.type);
}
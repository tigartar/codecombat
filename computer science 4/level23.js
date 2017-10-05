function findStrongestEnemy(enemies) {
    var strongest = null;
    var strongestHealth = 0;
    var enemyIndex = 0;
    while(enemyIndex < enemies.length) {
       if (enemies[enemyIndex].health > strongestHealth) {
       var strongest = enemies[enemyIndex]
       var strongestHealth = strongest.health
enemyIndex+=1;
    return strongest;
    }
    }
}
var enemies = hero.findEnemies();
var leader = findStrongestEnemy(enemies);
if (enemies) {
    hero.say(findStrongestEnemy (enemies));
}
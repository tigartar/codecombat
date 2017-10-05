//the level suggests you move to the right to take on the enemy that shows up the hero moves fast enough to catch the enemy before it gets too close if you put the location in the center
function findAndAttackEnemy() {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
    }
}
while(true) {
    hero.moveXY(46, 34);
    findAndAttackEnemy(); 
}
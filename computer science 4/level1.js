var attacks = 0;
while (attacks < 10) {
    // Attack the nearest enemy!
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);      
    }
    attacks += 1;
}
if (enemy && hero.isReady('cleave'))
    hero.cleave(enemy);
hero.moveXY(51, 31);
hero.moveXY(68, 27);
hero.moveXY(79, 33);
hero.say("I should retreat!");
while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();   
    if(flag) {
        hero.pickUpFlag(flag);
        hero.say("I should pick up the flag.");
    } else if(enemy) {
    var distance = hero.distanceTo(enemy);
    if (distance <10) {
        hero.attack(enemy);
    }
    }
}
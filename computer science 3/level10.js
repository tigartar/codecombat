while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        var x = enemy.pos.x;
        var y = enemy.pos.y; // ∆ Change this!
        hero.say(x + ',' + y);
    } else {
        hero.say("Cease" + " Fire!");
    }
}
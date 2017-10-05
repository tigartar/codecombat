while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy && enemy.type == 'brawler' && hero.distanceTo(enemy) <50) {
        hero.say("Fire!");  
    }
}
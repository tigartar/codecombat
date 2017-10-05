while (true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (enemy && enemy.type == 'munchkin' && distance <20) {
        hero.attack(enemy);   
    }        
}
while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy.type == 'thrower' || enemy.type == 'munchkin') {
        hero.attack(enemy);
    var item = hero.findNearestItem();
    if (item.type == 'gem' || item.type == 'coin') {
        hero.moveXY(item.pos.x, item.pos.y);
    }      
    }
}
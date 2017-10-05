while (true) {
    var enemy = hero.findNearestEnemy();
    if (enemy && enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    var item = hero.findNearestItem();
    if (item && item.type == 'coin') {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}
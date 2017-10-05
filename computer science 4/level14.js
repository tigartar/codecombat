while (true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    while (enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        while (enemy.health > 0) {
            hero.attack(enemy);
        }
        enemyIndex += 1;
    }
    var items = hero.findItems();
    var itemIndex = 0;
    while (itemIndex < items.length) {
        var item = items[itemIndex];
        while(item && hero.distanceTo(item) >4 )  {
            hero.moveXY(item.pos.x, item.pos.y);
        }
        itemIndex += 1;
    }
}
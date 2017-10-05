while (true) {
    var coin = hero.findNearestItem();
    while(coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
	var coin = hero.findNearestItem();
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        while(enemy.health>0) {
            hero.attack(enemy);
        }

    }
}
}
while(true) {
    var enemies = hero.findEnemies();
    var enemyIndex = 0;
    while (enemyIndex < enemies.length) {
        var enemy = enemies[enemyIndex];
        hero.attack(enemy);
        enemyIndex++;
    }
    var coins = hero.findItems();
    var coinIndex = 0;
    while (coinIndex < coins.length) {
 var       coin = coins[coinIndex];
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Increase coinIndex by one.
        coinIndex++;
    }
}
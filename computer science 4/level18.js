loop {
    var coins = this.findItems();
    var coinIndex = 0;
    while (coinIndex < coins.length) {
        var coin = coins[coinIndex];
        if (coin.value == 3) {
            this.moveXY(coin.pos.x, coin.pos.y);
        }
        coinIndex += 1;
    }
}
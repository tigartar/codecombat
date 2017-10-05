loop {
    var coins = this.findItems();
    var coinIndex = 0;
    var nearest = null;
    var nearestDistance = 9999;
    while(coinIndex < coins.length) {
        var coin = coins[coinIndex];
        coinIndex++;
        var distance = this.distanceTo(coin);
        if (distance < nearestDistance) {
            nearest = coin; // Set nearest to coin
            nearestDistance = distance; // Set nearestDistance to distance
        }    
    }
    if (nearest) {
        this.moveXY(nearest.pos.x, nearest.pos.y);
    }
}
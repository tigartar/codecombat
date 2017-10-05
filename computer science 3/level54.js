var totalGold = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
        totalGold += coin.value;
    }
    if (totalGold >= 25) {
        break;
    }
}
hero.moveXY(58, 33);
hero.say(hero.gold);
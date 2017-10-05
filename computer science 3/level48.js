while(true) {
    var coin = hero.findNearestItem();
    var healingThreshold = hero.maxHealth / 2;
    if(hero.health < healingThreshold) {
        hero.moveXY(hero.pos.x - 10, hero.pos.y);
        hero.say("Can I get a heal?");
    } else if (coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
}
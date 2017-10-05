var decoysBuilt = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        hero.moveXY(coin.pos.x, coin.pos.y);
    }
   var goldAmount = hero.gold;
    if (goldAmount >= 25) {
        hero.buildXY('decoy', coin.pos.x, coin.pos.y);
        decoysBuilt = decoysBuilt + 1;
    }
    if(decoysBuilt == 4) {
        break;
    }
}
hero.say("Done building decoys!");
hero.moveXY(14, 36);
hero.say(decoysBuilt);
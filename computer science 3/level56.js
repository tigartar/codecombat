while(true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    if(!enemy) {
        continue;
    }
    if(!item) {
        hero.say("Give me a drink!");
        continue;
    }
    if (item.type == 'poison') {
        continue;
    }
        hero.moveXY(item.pos.x, item.pos.y);
    hero.moveXY(34, 48);
}
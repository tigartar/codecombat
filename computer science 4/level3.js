var yak = hero.findNearestEnemy();
while (yak) {
    var item = hero.findNearestItem();
    if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    var yak = hero.findNearestEnemy();
}
hero.moveXY(38, 58);
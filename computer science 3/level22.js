function isCoinClose(coin) {
    var distance = hero.distanceTo(coin);
    if (distance < 20) {
        return true;
    }
    else {
        return false;
    }
}
while (true) {
    var item = hero.findNearestItem();
    if (item) {
        if (isCoinClose(item)) {
            hero.moveXY(item.pos.x, item.pos.y);
        }
    }
}
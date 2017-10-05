while (true) {
    var item = hero.findNearestItem();
    var distance = hero.distanceTo(item);
    if (item.type == 'gem' || distance <20) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}
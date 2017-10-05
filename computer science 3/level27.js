while (true) {
    var item = hero.findNearestItem();
    if (item) {
        if (item && item.type != 'gem')
            hero.moveXY(item.pos.x, item.pos.y);
    }
}
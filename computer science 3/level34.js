while (true) {
    var item = hero.findNearestItem();
    if (item.type == "coin" && item.value == 2) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
    if (item.type == 'gem' && item.value == 10) {
        hero.moveXY(item.pos.x, item.pos.y);    
    }
}
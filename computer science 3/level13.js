while(true) {
    var flag = hero.findFlag();
    if (flag) {
        hero.buildXY("fire-trap", flag.pos.x, flag.pos.y);
        hero.pickUpFlag(flag);  
    }
    else {
        var item = hero.findNearestItem();
        if (item) {
            var itemPos = item.pos;
            var itemX = itemPos.x;
            var itemY = itemPos.y;
            hero.moveXY(itemX, itemY);
        }
    }
}
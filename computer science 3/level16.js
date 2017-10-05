while(true) {
    var flag = hero.findFlag();
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();
    if (flag) {
        hero.pickUpFlag(flag);
    }
    else if (enemy) {
    var distance = hero.distanceTo(enemy);
    if (distance <20) {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        else {
            hero.attack(enemy);
            }  
        }
    }
    else if (item) {
        var distancei = hero.distanceTo(item);
        if (distancei <15)
        hero.moveXY(item.pos.x, item.pos.y);
    }
}

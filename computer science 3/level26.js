while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) {
        if(enemy.type != "peon") {
            hero.attack(enemy);
        }
    }
    var item = hero.findNearestItem();
    if (item && item.type != 'poison')

       hero.moveXY(item.pos.x, item.pos.y);
    }
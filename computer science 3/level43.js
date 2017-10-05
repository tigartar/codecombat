while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        if (hero.isReady("cleave")) {
            hero.cleave(enemy);
        }
        else {
            hero.attack(enemy);
        }
    }
    else {
      var  x = hero.pos.x + 10;
      var  y = hero.pos.y + 10;
      hero.moveXY(x, y);
    }
}
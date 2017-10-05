while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy.type == "munchkin" || enemy.type == "thrower") {
        hero.attack(enemy);
    }
    var item = hero.findNearestItem();
      if (item.type == 'gem' || item.type == 'coin')
hero.moveXY(item.pos.x, item.pos.y);
}
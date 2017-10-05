var defeatedOgres = 0;
while (defeatedOgres < 6) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.attack(enemy);
        defeatedOgres += 1;
    } else {
        hero.say("Ogres!");
    }
}
hero.moveXY(49, 36);
while (hero.gold < 30) {
   var item = hero.findNearestItem();
    if (item) {
        hero.moveXY(item.pos.x, item.pos.y);
    }
}
hero.moveXY(76, 32);
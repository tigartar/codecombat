var potionCount = 0;
while (potionCount != 7){
var    item = hero.findNearestItem();
    if (item)
        hero.moveXY(item.pos.x, item.pos.y);
        potionCount += 1;
}
while(true) {
var   enemy = hero.findNearestEnemy();
    if (enemy)
        hero.attack(enemy);
}
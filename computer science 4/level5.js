var ordersGiven = 0;
while (ordersGiven < 5) {
   var x = hero.pos.x;
   var y = hero.pos.y - 10;
    hero.moveXY(x, y);
    hero.say("Attack!");
ordersGiven += 1;
if (ordersGiven >= 5)
        break;
}
while(true) {
    var enemy = hero.findNearestEnemy();
    hero.attack(enemy);
}
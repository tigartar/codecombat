while(true) {
    var enemy = hero.findNearestEnemy();
    var friend = hero.findNearestFriend();
    var x = (enemy.pos.x + friend.pos.x) / 2;
    var y = (enemy.pos.y + friend.pos.y) / 2;
    hero.moveXY(x, y);
}
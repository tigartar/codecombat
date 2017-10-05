while(true) {
    var friend = hero.findNearestFriend();
    if(friend) {
        hero.say("To battle, " + friend.id + "!");
    }
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        hero.say("To go away," + enemy.id + "!");
    }
}
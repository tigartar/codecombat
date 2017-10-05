loop {
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
    if (this.gold > this.costOf("soldier")) {
        this.summon("soldier");
    }
    var friends = this.findFriends();
    for (var friendIndex = 0; friendIndex < friends.length; friendIndex++) {
        var friend = friends[friendIndex];
        if (friend.type == "soldier") {
            var enemy = friend.findNearestEnemy();
            if (enemy) {
                this.command(friend, "attack", enemy);
            } else {
                this.command(friend, "move", {x: 98, y: 40});
            }
        }
    }
}
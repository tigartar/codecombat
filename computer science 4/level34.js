var friends = this.findFriends();
var j = 0;
loop {
    for(var i=0; i < friends.length; i++) {
    var  friend = friends[i];
        var enemy = friend.findNearestEnemy();
        if (enemy) {
            this.command(friend, "attack", enemy);
        } else {
            var step = 1;
            if (friend.type === "archer") {step = (j%5>1)?1:0;}
            this.command(friend, "move", {x: friend.pos.x+step, y: friend.pos.y});
        }
    }
    j++;
    if (j > 500) {break;}
}
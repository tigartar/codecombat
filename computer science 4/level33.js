while (this.gold < 80) {
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
}
for(var i=0; i < 4; i++) {
    this.summon("soldier");
}
var points = [];
points[0] = { x: 13, y: 73 };
points[1] = { x: 51, y: 73 };
points[2] = { x: 51, y: 53 };
points[3] = { x: 90, y: 52 };
var friends = this.findFriends();
for(i=0; i < friends.length; i++) {
    var point = points[i];
    var friend = friends[i];
    this.command(friend, "move", point);
}
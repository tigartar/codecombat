while (this.gold > this.costOf("soldier")) {
    this.summon("soldier");
}  
var soldiers = this.findFriends();
var soldierIndex = 0;
while (soldierIndex < soldiers.length) {
    var soldier = soldiers[soldierIndex];
    this.command(soldier, "move", {x: 50, y: 40});
    soldierIndex++;
}
this.moveXY(50, 40);
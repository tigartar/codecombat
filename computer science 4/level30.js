loop {
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
    
    if (this.gold > this.costOf("soldier")) {
        this.summon("soldier"); // this.say("I should summon something here!");
    }
    var enemy = this.findNearest(this.findEnemies());
    if (enemy) {
        var soldiers = this.findFriends();
        var soldierIndex = 0;
        while (soldierIndex < soldiers.length) {
            var soldier = soldiers[soldierIndex];
            soldierIndex++;
            this.command(soldier, "attack", enemy);
        }
    }
}
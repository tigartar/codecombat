// Lure the ogres into an ambush!

// While your gold is less than 25, collect coins.

// After the while loop, build a "decoy" at the white X.

// While your health equals maxHealth, say insults

// Then move back to the red
while(hero.gold <25) {
    if (hero.gold <25) {
var item = hero.findNearestItem();
    if (item) {
       var pos = item.pos;
       var x = pos.x;
       var y = pos.y;
       hero.moveXY(x, y);
    }
        else {
            break;
        }
    }
}

hero.buildXY('decoy', 72, 68);
while(true) {
    if (hero.health == hero.maxHealth) {
        hero.say('waka');
    }
    else {
        hero.moveXY(21, 16);
    }
}

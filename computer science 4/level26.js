// notice the line that isnt active?

while(true) {

    var pender = hero.findNearest(hero.findFriends());

    if (pender) {
        //hero.moveXY(pender.pos.x, pender.pos.y);
        hero.move(pender.pos);
    }
}

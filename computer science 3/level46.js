while(true) {
    var yak = hero.findNearestEnemy();
    if (yak) {
        if (yak.pos.y > hero.pos.y)
            hero.buildXY('fence', hero.pos.x, yak.pos.y - 10);
        if (yak.pos.y < hero.pos.y)
            hero.buildXY('fence', hero.pos.x, yak.pos.y + 10);
    } else {
        hero.moveXY(hero.pos.x + 10, hero.pos.y);
    }
}
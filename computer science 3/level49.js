function shouldRun() {
    if (hero.health < hero.maxHealth / 2) {
        return true;
    } else {
        return false;
    }
}
while (true) {
    if (shouldRun) {
    hero.moveXY(75, 37);
    }
}
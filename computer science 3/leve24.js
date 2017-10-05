function coinDistance() {
    var item = hero.findNearestItem();
    if (item) {
        return hero.distanceTo(item);
    }
    else {
        return 0;
    }
}
while (true) {
    var distance = coinDistance();
    if (distance > 0) {
        hero.say(distance);
    }
}
function maybeBuildSomething(buildType, x, y) {
    hero.moveXY(x, y);
    var enemy = hero.findNearestEnemy();
    if (enemy) {
    hero.buildXY(buildType, x, y);      
}
}
while(true) {
    maybeBuildSomething("fire-trap", 40, 20);
    maybeBuildSomething("fence", 26, 34);
    maybeBuildSomething("fire-trap", 40, 50);
    maybeBuildSomething("fence", 54, 34);
}
function checkToDefend(target) {
    var enemy = hero.findNearestEnemy();
            if (enemy) {
        hero.attack(enemy);
}
else {
		hero.attack("Door");
            }
}
while(true) {
    var enemy = hero.findNearestEnemy();
    checkToDefend(enemy);
}
function shouldAttack(target) {
	// return false if no target
    if (!target) {
        return false;
    }
	// return false if target.type == "burl"
    if (target.type == "burl") {
        return false;
    }
    // Otherwise, return true
    return true;
}
while(true) {
    var enemy = hero.findNearestEnemy();
    var heroShouldAttack = shouldAttack(enemy);
    if(heroShouldAttack) {
hero.attack(enemy);
    }
}
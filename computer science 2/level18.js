while(true) {
    var enemy = hero.findNearestEnemy();
    var distance = hero.distanceTo(enemy);
    if (distance < 10) {
        hero.cleave();
    }
    else {
         hero.attack("Chest");
    }   
}

while(true) {
    var currentHealth = hero.health;
    var healingThreshold = hero.maxHealth / 2;
    if (currentHealth < healingThreshold) {
        hero.moveXY(65, 45);
        hero.say("heal me");        
    }
    else {
        var enemy = hero.findNearestEnemy();
        if (enemy) {
            if (hero.isReady("cleave")) {
                hero.cleave(enemy);
            }
            else if (hero.isReady("power-up")) {
                hero.powerUp();                
            }
            else {
                hero.attack(enemy);
            }
            }
        }
    }
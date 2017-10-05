function petLogic() {

    while(true) {
        pet.moveXY(51, 74);
        var item = hero.findNearestItem();
        if (item) {
            pet.fetch(item);
        }
    }
    pet.say("Command me!");
}
pet.on('spawn', petLogic);
while(true) {
    var enemy = hero.findNearestEnemy();
    if(enemy) 
    if (hero.isReady("cleave")) {
        hero.cleave(enemy);
    } else if(hero.findNearestItem());
    else {
        hero.attack(enemy);
    }
}

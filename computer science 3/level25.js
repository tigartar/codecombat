while(true) {
    var item = hero.findNearestItem();
    if(item) {
        if(item.type != "gem") {
            hero.moveXY(pet.pos.x, pet.pos.y);
        }
        else {
            hero.moveXY(item.pos.x, item.pos.y);
        }
    }
}
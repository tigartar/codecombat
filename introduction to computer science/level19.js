while(true) {
 hero.moveRight();
 hero.moveUp();
 var enemy = hero.findNearestEnemy();
 hero.attack(enemy);   
 hero.attack(enemy);
 hero.moveRight();
 hero.moveDown(2);
 hero.moveUp(1);
}
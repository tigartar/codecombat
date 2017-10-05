function moveRight() {
    var x = hero.pos.x + 12;
    var y = hero.pos.y;
    hero.moveXY(x,y);
}
function moveLeft() {
    var x = hero.pos.x -12;
    var y = hero.pos.y; 
    hero.moveXY(x,y);
}
function moveDown() {
    var x = hero.pos.x;
    var y = hero.pos.y -12; 
    hero.moveXY(x,y);
}
function moveUp() {
    var x = hero.pos.x;
    var y = hero.pos.y +12; 
    hero.moveXY(x,y);
}
moveRight();
moveDown();
moveUp();
moveUp();
moveRight();
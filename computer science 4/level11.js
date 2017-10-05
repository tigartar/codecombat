while(true) {
var  items = hero.findItems();
if ((items.length) > 1) {
hero.moveXY(items[1].pos.x, items[1].pos.y);
}  else
hero.moveXY(40, 34);
}
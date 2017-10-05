var points = [{x: 21, y: 8}, {x: 33, y: 8}, {x: 45, y: 8},
    {x: 57, y: 8}, {x: 68, y: 8}, {x: 68, y: 18},
    {x: 68, y: 28}, {x: 68, y: 38}, {x: 68, y: 48},
    {x: 68, y: 58}, {x: 56, y: 58}, {x: 44, y: 58}, 
    {x: 32, y: 58}, {x: 20, y: 58}, {x: 10, y: 60}];
var pointIndex = 0;
while (pointIndex < points.length) {
    var point = points[pointIndex];
    hero.moveXY(point.x, point.y);
    var enemy = hero.findNearestEnemy();
    var coin = hero.findNearestItem();
    if (enemy.team == "ogres" && enemy.health <10) {
        hero.attack(enemy);
    }
    var coin = hero.findNearestItem();
    if (coin && hero.distanceTo(coin)<7 && coin.value <5) {
        hero.moveXY(coin.pos.x, coin.pos.y);
        
    }
    if (enemy && enemy.health <10 && enemy.type == "skeleton") {
        hero.attack(enemy);
    }   
    pointIndex++;
}
var less = 'Nimis';
var more = 'Non satis';
var requiredGold = 104;
function sumCoinValues(coins) {
    var i = 0;
    var total = 0;
    while (i < coins.length) {
        total += coins[i].value;
        i++;
    }
    return total;
}
while (true) {
    var items = hero.findItems();
    var goldAmount = sumCoinValues(items);
    if (items.length !== 0) {
        if (goldAmount < 104) {
            hero.say('Non satis');
        }
        if (goldAmount > 104) {
            hero.say('Nimis');
        }
        if (goldAmount == 104) {
            hero.say(goldAmount);
            loop {
                var coins = hero.findItems();                
                var index = 0;
                var nearestDistance = 9999;
                var nearest = coin;
                while (index < coins.length) {
                    var coin = coins[index];
                    index += 1;
                    var distance = hero.distanceTo(coin);
                    if (distance < nearestDistance) {
                        nearest = coin;
                        nearestDistance = distance;
                    }
                }
                hero.moveXY(nearest.pos.x, nearest.pos.y);                
            }
        }
    }
}
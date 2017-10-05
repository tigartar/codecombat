var everybody = ['Yetu', 'Tabitha', 'Rasha', 'Max', 'Yazul',  'Todd'];
var enemyIndex = 0;
while (enemyIndex < everybody.length) {
    if (everybody[enemyIndex]) {
       hero.attack(everybody[enemyIndex]); 
    }
    enemyIndex += 2;
}
hero.moveXY(36, 54);

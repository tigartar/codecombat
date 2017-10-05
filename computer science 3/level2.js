var potionsOnTheWall = 10;
var numToTakeDown = 1;
while(true) {
    hero.say(potionsOnTheWall + " potions of health on the wall!");
    hero.say(potionsOnTheWall + " potions of health!");
    hero.say("Take 1 down, pass it around!");
    potionsOnTheWall -= numToTakeDown;
    hero.say(potionsOnTheWall + " potions of health on the wall!");
}
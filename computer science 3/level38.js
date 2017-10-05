hero.moveXY(14, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
var secretC = secretA && secretB;
if (secretC)
    hero.moveXY(20, 33);
else
    hero.moveXY(20, 15);
hero.moveXY(26, 24);
var secretC = secretA || secretB;
if (secretC) {
    hero.moveXY(32, 33);
}
    else {
        hero.moveXY(32, 15);
    }
    hero.moveXY(38, 24);
secretC = !secretB;
if (secretC) {
    hero.moveXY(44, 33);
}
else {
    hero.moveXY(44, 15);
}
hero.moveXY(50, 24);
hero.moveXY(20, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
var secretC = hero.findNearestFriend().getSecretC();
var secretD = secretA && secretB && secretC;
if (secretD)
    hero.moveXY(30, 33);
else
    hero.moveXY(30, 15);
var secretD = secretA || secretB || secretC;
if (secretD) {
    hero.moveXY(20, 24);    
}
else {
    hero.moveXY(40, 24);
}
var secretD = secretA && secretB && secretC;
if (secretD) {
    hero.moveXY(30, 33);
}
else {
    hero.moveXY(30, 15);
}
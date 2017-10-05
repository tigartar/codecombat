var friendNames = ['Joan', 'Ronan', 'Nikita', 'Augustus'];
var friendIndex = 0;
while (friendIndex < friendNames.length) {
 var   friendName = friendNames[friendIndex];
    hero.say(friendName + ', go home!');
  friendIndex += 1;
}
hero.moveXY(25, 30);
hero.buildXY('fence', 29, 30);
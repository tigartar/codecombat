var neutrals = hero.findEnemies();
while (true) {
    if (neutrals.length) {
        hero.say(neutrals[0].id);
    } else {
        hero.say("Nobody here");
    }
    neutrals = hero.findEnemies();
}
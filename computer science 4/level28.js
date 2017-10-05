while(this.now() < 28) {
    var coin = this.findNearest(this.findItems());
    this.move(coin.pos);
}
while(this.pos.x > 18) {
    this.shield();
    this.moveXY(18, 37);
}
this.buildXY("fence", 21, 37);

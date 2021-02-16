import movement from "./movement/movement";
import delay from "./core/delay";

class Character {
  spawn(ctx, posX, posY) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(posX, posY, 50, 50);
    ctx.stroke();

    this.posX = posX;
    this.posY = posY;
    this.ctx = ctx;
  }
  moveLeft() {
    for (var i = 0; i < 10; i++) {
      movement.moveLeft(this.ctx, this);
      await delay(100)
    }
  }
  moveRight() {
    for (var i = 0; i < 10; i++) {
      movement.moveRight(this.ctx, this);
      await delay(100)
    }
  }
  jump() {
    movement.jump(this.ctx, this);
  }
}

export default Character;

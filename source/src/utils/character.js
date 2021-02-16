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
    movement.moveLeft(this.ctx, this);
  }
  moveRight() {
    movement.moveRight(this.ctx, this);
  }
  jump() {
    movement.jump(this.ctx, this);
  }
}

export default Character;

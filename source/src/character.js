import movement from "./engine/movement/movement";
import config from "./engine/terrain/config";

class Character {
  constructor(ctx) {
    this.width = 50;
    this.height = 50;
    this.posX = config.SOC + this.width;
    this.posY = config.GL - this.height;

    this.ctx = ctx;
  }
  spawn() {
    console.log(`spawing character at location: ${this.posX}, ${this.posY}`);

    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.ctx.stroke();
  }
  moveLeft() {
    movement.moveLeft(this);
  }
  moveRight() {
    movement.moveRight(this);
  }
  jump() {
    movement.jump(this);
  }
  update() {
    this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
  }
}

export default Character;

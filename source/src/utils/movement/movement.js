import config from "../movement/config";

function moveLeft(ctx, char) {
  ctx.beginPath();
  ctx.clearRect(char.posX, char.posY, 50, 50);
  ctx.fillStyle = "green";
  ctx.fillRect(char.posX - config.speed, char.posY, 50, 50);
  ctx.stroke();
  char.posX = char.posX - config.speed;
  return { posX: char.posX, posY: char.posY };
}
function moveRight(ctx, char) {
  ctx.beginPath();
  ctx.clearRect(char.posX, char.posY, 50, 50);
  ctx.fillStyle = "green";
  ctx.fillRect(char.posX + config.speed, char.posY, 50, 50);
  ctx.stroke();
  char.posX = char.posX + config.speed;
  return { posX: char.posX, posY: char.posY };
}
function jump(ctx, char) {}

export default { moveLeft, moveRight, jump };

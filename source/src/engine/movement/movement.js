import config from "./config";

function moveLeft(char) {
  char.update();
  char.posX -= config.speed;
  return char;
}
function moveRight(char) {
  char.update();
  char.posX += config.speed;
  return char;
}
function jump(char) {
  char.update();
  for (var i = 0; i < 10; i++) {
    char.posY -= 5;
  }
  setTimeout(() => {
    for (var i = 0; i < 10; i++) {
      char.update();
      char.posY += 5;
    }
  }, 1000);
  return char;
}

export default { moveLeft, moveRight, jump };

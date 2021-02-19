import data from "../index"; // Get character and terrain data
import movementConfig from "../engine/movement/config"; // Import data about movement
import collision from "../engine/collision/collision";
import terrainData from "../engine/terrain/config";

let isCollision;
let playerX;
let playerY;

function keyPress(pressedKey) {
  const { char, terrain } = data;
  const { key } = pressedKey;

  let sortedBlocks = [];

  switch (key) {
    case "d":
      playerX = char.posX;
      playerY = char.posY + terrainData.HOB;
      for (var i = 0; i < terrain.length; i++) {
        let terr = terrain[i];
        let distanceX = Math.abs(playerX - terr.x);
        let distanceY = Math.abs(playerY - terr.y + terrainData.HOB);

        console.log(`${distanceX} : ${distanceY}`);

        sortedBlocks.push({ ...terr, distanceX, distanceY });
      }
      isCollision = collision(
        sortedBlocks.sort(compare),
        playerX,
        playerY,
        "right"
      );
      if (isCollision) {
        return;
      } else char.moveRight();
      break;

    case "a":
      playerX = char.posX - char.width + 5;
      playerY = char.posY + terrainData.HOB;

      for (var i = 0; i < terrain.length; i++) {
        let terr = terrain[i];
        let distanceX = Math.abs(
          playerX - terr.x - movementConfig.speed - terr.width
        );
        let distanceY = Math.abs(playerY - terr.y + terrainData.HOB);

        console.log(`${distanceX} : ${distanceY}`);

        sortedBlocks.push({ ...terr, distanceX, distanceY });
      }
      isCollision = collision(
        sortedBlocks.sort(compare),
        playerX,
        playerY,
        "left"
      );
      if (isCollision) {
        return;
      } else char.moveLeft();
      break;

    case " ":
      playerX = char.posX - char.width + 5;
      playerY = char.posY + terrainData.HOB;

      for (var i = 0; i < terrain.length; i++) {
        let terr = terrain[i];
        let distanceX = Math.abs(
          playerX - terr.x - movementConfig.speed - terr.width
        );
        let distanceY = Math.abs(playerY - terr.y + terrainData.HOB);

        console.log(`${distanceX} : ${distanceY}`);

        sortedBlocks.push({ ...terr, distanceX, distanceY });
      }
      isCollision = collision(
        sortedBlocks.sort(compare),
        playerX,
        playerY,
        "jump"
      );
      if (isCollision) {
        return;
      } else char.jump();
      break;
  }
}

function compare(a, b) {
  if (a.distanceX < b.distanceX) {
    return -1;
  }
  if (a.distanceX > b.distanceX) {
    return 1;
  }
  return 0;
}

export default keyPress;

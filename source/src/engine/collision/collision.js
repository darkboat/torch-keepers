function collision(sortedBlocks, playerX, playerY, type) {
  let isCollision = false;
  if (type == "right") {
    if (sortedBlocks[0].distanceX == 0 && sortedBlocks[0].distanceY <= 25) {
      isCollision = true;
      return isCollision;
    } else return isCollision;
  } else if (type == "left") {
    if (sortedBlocks[0].distanceX == 0 && sortedBlocks[0].distanceY == 0) {
      isCollision = true;
      return isCollision;
    } else return isCollision;
  } else if (type == "jump") {
    isCollision = false;
    return isCollision;
  }
}

export default collision;

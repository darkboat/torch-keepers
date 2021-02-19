// Helping Functions
import draw from "./draw";
import config from "./config";
let terrain = [];

function genTerrain(canvas, ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let spaceTaken = config.SOC;

  // Terrain Gen
  for (var i = 0; i < 5; i++) {
    spaceTaken = gen(spaceTaken, ctx);
  }

  return terrain;
}

function gen(spaceTaken, ctx) {
  if (spaceTaken == config.SOC) {
    let x = config.SOC;
    let y = config.GL;
    let width = config.spawnBlock.WOB;
    let height = config.spawnBlock.HOB;

    spaceTaken = draw(ctx, x, y, width, height);
    terrain.push({ x, y, width, height });
    return spaceTaken;
  } else {
    let isCheckpoint = Math.ceil(Math.random() * 50) == 1;
    if (isCheckpoint) {
      let x = spaceTaken + 50;
      let y = config.GL;
      let width = 1000;
      let height = config.HOB;

      spaceTaken = draw(ctx, x, y, width, height);
      terrain.push({ x, y, width, height });
      return spaceTaken;
    } else {
      let x = spaceTaken + 50;
      let y = config.GL;
      let width = Math.floor(Math.random() * 50) + config.WOB;
      let height = config.HOB;

      spaceTaken = draw(ctx, x, y, width, height);
      terrain.push({ x, y, width, height });
      return spaceTaken;
    }
  }
}

export default genTerrain;

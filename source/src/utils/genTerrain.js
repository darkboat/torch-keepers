// Helping Functions
import draw from "./terrain/draw";
import config from "./terrain/config";

function genTerrain(canvas, ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let spaceTaken = config.SOC;

  // Terrain Gen
  for (var i = 0; i < 5; i++) {
    spaceTaken = gen(spaceTaken, ctx);
  }
}

function gen(spaceTaken, ctx) {
  if (spaceTaken == config.SOC) {
    spaceTaken = draw(
      ctx,
      config.SOC,
      config.GL,
      config.spawnBlock.WOB,
      config.spawnBlock.HOB
    );
    return spaceTaken;
  } else {
    let isCheckpoint = Math.ceil(Math.random() * 50) == 1;
    if (isCheckpoint) {
      let xLevel = spaceTaken + 50;
      let yLevel = config.GL;
      let width = 1000;
      spaceTaken = draw(ctx, xLevel, yLevel, width, config.HOB);
      return spaceTaken;
    } else {
      let xLevel = spaceTaken + Math.floor(Math.random() * 100) + 50;
      let yLevel = config.GL - Math.floor(Math.random() * 150);
      let width = Math.floor(Math.random() * 50) + config.WOB;

      spaceTaken = draw(ctx, xLevel, yLevel, width, config.HOB);
      console.log(spaceTaken);
      return spaceTaken;
    }
  }
}

export default genTerrain;

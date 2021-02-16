import lodash from "lodash";

// Functions
import Character from "./utils/character";
import genTerrain from "./utils/genTerrain";
import config from "./utils/terrain/config";

// Canvas Setup
const canvas = document.querySelector("canvas"); // get the canvas reference
const ctx = canvas.getContext("2d"); // get the context of the cavas to draw on it

// Setting state to update the game
let state = {
  character: {
    posX: config.SOC * 4.3333,
    posY: config.GL - config.HOB * 2,
  },
  blocks: [],
};

// Character Initiation
let char = new Character();

function draw() {
  ctx.clearRect();
  char.spawn(ctx, state.character.posX, state.character.posY);
  state.blocks = genTerrain(canvas, ctx);
}

function update(progress) {}

function loop() {
  update();
  draw();
}

window.requestAnimationFrame(loop);

import lodash from "lodash";

// Functions
import Character from "./character";
import genTerrain from "./engine/terrain/genTerrain";
import keyPress from "./events/keyPress";

// Global Variables
let stack = [];
let terrain = [];

// Canvas Setup
const canvas = document.querySelector("canvas"); // get the canvas reference for the terrain
const ctx = canvas.getContext("2d"); // get the context of the cavas for the terrain

// Initiate Character
let char = new Character(ctx);

// Event Listeners
document.addEventListener("keydown", keyPress);

// Game Loop
function drawMap() {
  let terr = genTerrain(canvas, ctx);
  terr.forEach((block) => {
    terrain.push(block);
  });
}

function loop() {
  window.requestAnimationFrame(() => {
    stack.push(char.spawn(canvas, ctx), loop());
  });
}

while (stack.length) {
  stack.forEach((func) => {
    func();
  });
}

window.requestAnimationFrame(() => {
  stack.push(drawMap(), char.spawn(canvas, ctx), loop());
});

const exportData = {
  char: char,
  terrain: terrain,
};

export default exportData;

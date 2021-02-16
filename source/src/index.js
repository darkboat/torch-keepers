import lodash from "lodash";

// Functions
import Character from "./utils/character";
import genTerrain from "./utils/genTerrain";
import config from "./utils/terrain/config";

// Canvas Setup
const canvas = document.querySelector("canvas"); // get the canvas reference
const ctx = canvas.getContext("2d"); // get the context of the cavas to draw on it

function fullscreen() {
  if (canvas.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else {
    el.mozRequestFullScreen();
  }
}
canvas.addEventListener("click", fullscreen);

genTerrain(canvas, ctx);
let char = new Character();
char.spawn(ctx, config.SOC * 4.3333, config.GL - config.HOB * 2);

document.addEventListener("keydown", (e) => {
  let key = e.key;
  if (key == "a") {
    char.moveLeft();
  } else if (key == "d") {
    char.moveRight();
  }
});

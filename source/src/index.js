import lodash from "lodash";
import spawn from "./utils/character";

// Canvas Setup
const canvas = document.querySelector("canvas"); // get the canvas reference
const ctx = canvas.getContext("2d"); // get the context of the cavas to draw on it

// Defualt Character Image Setup
spawn();

console.log("Webpack is packin!")

import MovingObject from "./moving-object.js";

window.MovingObject = MovingObject;
const moving = new MovingObject({
    pos: [120, 120],
    vel: [10, 10],
    radius: 100,
    color: "#FF0000"
})

const canvasEle = document.getElementById("game-canvas")
const ctx = canvasEle.getContext("2d")

moving.draw(ctx)
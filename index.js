import { Mouse } from "./mouse.js";
import { Offset, offsetMap } from "./offset.js";
import { generateWorld, World, renderWorld } from './world.js'

const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');

export const widthCanvas = 500;
export const heightCanvas = 500;

canvas.style.width = widthCanvas
canvas.style.height = heightCanvas

canvas.width = widthCanvas
canvas.height = heightCanvas

canvas.addEventListener('mousemove', function as(e){
    Mouse.coordinates.x = e.clientX
    Mouse.coordinates.y = e.clientY
})

generateWorld()
console.log(World)


function mainGameLoop() {
    ctx.clearRect(0, 0, World.size.x, World.size.y)
    renderWorld()
    offsetMap()


    window.requestAnimationFrame(mainGameLoop);
}

mainGameLoop()



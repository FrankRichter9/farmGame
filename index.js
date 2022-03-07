import { Mouse } from "./mouse.js";
import { Offset } from "./offset.js";
import { generateWorld, World, renderWorld } from './world.js'

const canvas = document.querySelector('#canvas');
export const ctx = canvas.getContext('2d');

const widthCanvas = 500;
const heightCanvas = 500;


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

    if(Mouse.coordinates.x >= 480 && World.size.x >= Math.abs(Offset.coordinates.x * 2)){
        Offset.coordinates.x -= Offset.speed
        ctx.translate(-Offset.speed, 0)
    }else if (Mouse.coordinates.x <= 20 && 0 >= Offset.coordinates.x * 2) {
        Offset.coordinates.x += Offset.speed
        ctx.translate(Offset.speed, 0)
    }

    if(Mouse.coordinates.y >= 480 && World.size.y >= Math.abs(Offset.coordinates.y * 2)){
        Offset.coordinates.y -= Offset.speed
        ctx.translate(0, -Offset.speed)
    }else if (Mouse.coordinates.y <= 20 && 0 >= Offset.coordinates.y * 2) {
        Offset.coordinates.y += Offset.speed
        ctx.translate(0, Offset.speed)
    }

    console.log('Offset.x', Offset.coordinates.x)
    console.log('Offset.y', Offset.coordinates.y)

    


    window.requestAnimationFrame(mainGameLoop);
}

mainGameLoop()



import { ctx, widthCanvas, heightCanvas } from "./index.js"
import { Mouse } from "./mouse.js";
import { World } from './world.js'

export const Offset = {
    coordinates: {
        x: 0,
        y: 0,
    },
    speed: 4,
    distance: 30,
}

export function offsetMap() {
    const borderLeft = Offset.distance
    const borderRight = widthCanvas - Offset.distance
    const borderTop = Offset.distance
    const borderBottom = heightCanvas - Offset.distance

    if(Mouse.coordinates.x >= borderRight && World.size.x >= Math.abs(Offset.coordinates.x * 2)){
        Offset.coordinates.x -= Offset.speed
        ctx.translate(-Offset.speed, 0)
    }else if (Mouse.coordinates.x <= borderLeft && 0 >= Offset.coordinates.x * 2) {
        Offset.coordinates.x += Offset.speed
        ctx.translate(Offset.speed, 0)
    }

    if(Mouse.coordinates.y >= borderBottom && World.size.y >= Math.abs(Offset.coordinates.y * 2)){
        Offset.coordinates.y -= Offset.speed
        ctx.translate(0, -Offset.speed)
    }else if (Mouse.coordinates.y <= borderTop && 0 >= Offset.coordinates.y * 2) {
        Offset.coordinates.y += Offset.speed
        ctx.translate(0, Offset.speed)
    }
}
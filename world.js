import { ctx } from './index.js'

export const World = {
    map: [],
    size: {
        x: 10000,
        y: 10000,
    },
    block: {
        size: {
            x: 100,
            y: 100
        }
    },
    typesBlocks: {
        gress: {
            type: 'gress'
        }
    }
}

export function generateWorld() {
    for(let x = 0; x < World.size.x; x += World.block.size.x){
        World.map[x] = []
        for(let y = 0; y < World.size.y; y += World.block.size.y){
            World.map[x][y] = World.typesBlocks.gress
        }
    }
}

export function renderWorld() {
    for(let x = 0; x < World.size.x; x += World.block.size.x){
        for(let y = 0; y < World.size.y; y += World.block.size.y){
            renderBlock({x, y}, World.map[x][y])
        }
    }
}

function renderBlock(coordinates, block){
    if(block === World.typesBlocks.gress){
        ctx.fillRect(coordinates.x + 10, coordinates.y + 10, World.block.size.x - 20, World.block.size.y - 20)
    }
}
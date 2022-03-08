import { ctx } from './index.js'

const grassTexture = document.createElement("IMG");
grassTexture.src = './textures/grass/grass.png'


export const World = {
    map: [],
    size: {
        x: 1000,
        y: 1000,
    },
    block: {
        size: {
            x: 50,
            y: 50
        }
    },
    typesBlocks: {
        gress: {
            type: 'grass',
            render(x, y) {
                // ctx.fillRect(x + 10, y + 10, World.block.size.x - 20, World.block.size.y - 20)
                ctx.drawImage(grassTexture, x, y)
            }
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
    block.render(coordinates.x, coordinates.y)
}
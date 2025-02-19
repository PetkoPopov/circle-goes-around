import { lineObj } from "../circles/circle_2.js"
import { speed, radius, x, y, delta } from "../constants.js"

function moveCircle(circle) {
    let n = 0
    let x1, y1
    let movement = setInterval(() => {
        y1 = y + radius * Math.cos(n * delta)
        x1 = x + radius * Math.sin(n * delta)
        n++
        circle.style.top = y1 + 'px'
        circle.style.left = x1 + 'px'
    }, speed)
    return movement
}

function moveLine() {
    
    let x22 = lineObj.coorX
    let y22 = lineObj.coorY

    let move = setInterval(() => {
        lineObj.count++
        x22 = lineObj.count * delta * 20
        y22 = lineObj.count * delta * 20
        lineObj.circle.style.left = y22 + 'px'
        lineObj.circle.style.top  = x22 + 'px'
        lineObj.coorX = x22
        lineObj.coorY = y22
        
    }, speed)
    lineObj.interval = move
    
    return lineObj
}
export {
    moveCircle,
    moveLine
}
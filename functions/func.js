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

function moveLine(circle) {
    let countN = 0
    let x22 = 0
    let y22 = 0

    let  move = setInterval(() => {
        countN++
        x22 = countN * delta * 20
        y22 = countN * delta * 20
        circle.style.left = y22 + 'px'
        circle.style.top = x22 + 'px'
    }, speed)
return move
}
export {
    moveCircle,
    moveLine
}
import { lineObj } from "../circles/circle_2.js"
import { circleObj } from "../circles/circle_1.js"
import { speed, radius, x, y, delta } from "../constants.js"

function moveCircle() {


    let movement = setInterval(() => {
        circleObj.coorX = y + radius * Math.cos(circleObj.n * delta)
        circleObj.coorY = x + radius * Math.sin(circleObj.n * delta)
        circleObj.n++
        circleObj.circle.style.top = circleObj.coorY + 'px'
        circleObj.circle.style.left = circleObj.coorX + 'px'
    }, speed)
    circleObj.interval = movement
    return circleObj
}

function moveLine() {

    let x22 = lineObj.coorX
    let y22 = lineObj.coorY

    let move = setInterval(() => {
        lineObj.count++
        x22 = lineObj.count * delta * 20
        y22 = lineObj.count * delta * 20
        lineObj.circle.style.left = y22 + 'px'
        lineObj.circle.style.top = x22 + 'px'
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
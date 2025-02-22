import { lineObj } from "../circles/circle_2.js"
import { circleObj } from "../circles/circle_1.js"
import { speed, radius, x, y, delta, speedLine, moveCircleInterval, circleSize } from "../constants.js"
import { arrIntervals } from "../buttons/btnStartLine.js"

function moveCircle() {


    let movement = setInterval(() => {
        circleObj.coorX = y + radius * Math.cos(circleObj.n * delta * 180 / Math.PI)
        circleObj.coorY = x + radius * Math.sin(circleObj.n * delta * 180 / Math.PI)
        circleObj.n++
        circleObj.circle.style.top = circleObj.coorY + 'px'
        circleObj.circle.style.left = circleObj.coorX + 'px'
        console.log(circleObj.n)
    }, speed)
    return circleObj
}

function moveLine() {

    let x22 = lineObj.coorX
    let y22 = lineObj.coorY

    let move = setInterval(() => {
        lineObj.count++
        x22 = lineObj.count * delta * speedLine
        y22 = lineObj.count * delta * speedLine
        lineObj.circle.style.left = y22 + 'px'
        lineObj.circle.style.top = x22 + 'px'
        lineObj.coorX = x22
        lineObj.coorY = y22

        if (lineObj.radius() <= 205 && lineObj.radius() + circleSize / 10 > 205) {
            clearInterval(arrIntervals[0])
            arrIntervals.shift()
            let cosinus = (x - lineObj.coorX) / radius
            circleObj.n = (Math.PI*(Math.acos(cosinus)+Math.PI)) / (delta*180)
            moveCircleInterval.push(moveCircle().interval)
        }

    }, speedLine)
    lineObj.interval = move

    return lineObj
}
export {
    moveCircle,
    moveLine
}
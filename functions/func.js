import { lineObj } from "../circles/circle_2.js"
import { circleObj } from "../circles/circle_1.js"
import { speed, radius, x, y, delta, speedLine, moveCircleInterval } from "../constants.js"
import { arrIntervals } from "../buttons/btnStartLine.js"

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
        x22 = lineObj.count * delta * speedLine
        y22 = lineObj.count * delta * speedLine
        lineObj.circle.style.left = y22 + 'px'
        lineObj.circle.style.top = x22 + 'px'
        lineObj.coorX = x22
        lineObj.coorY = y22
        
        if (lineObj.radius() <= 197 && lineObj.radius() + 20 > 197) {
               clearInterval(arrIntervals[0])
               arrIntervals.shift()
               circleObj.coorX=lineObj.coorX
               circleObj.coorY=lineObj.coorY
               moveCircleInterval.push(moveCircle().interval)
           }

    }, speed)
    lineObj.interval = move
  
    return lineObj
}
export {
    moveCircle,
    moveLine
}
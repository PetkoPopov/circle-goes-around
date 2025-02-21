import { circleObj } from "../circles/circle_1.js"
import { lineObj } from "../circles/circle_2.js"
import { moveCircleInterval } from "../constants.js"
import { moveCircle, moveLine } from "../functions/func.js"

let btnStartLine = document.createElement('div')
btnStartLine.setAttribute('class', 'btn')
btnStartLine.style.backgroundColor = 'blue'
btnStartLine.style.left = '600px'
btnStartLine.textContent = 'Start'
let arrIntervals = []



btnStartLine.addEventListener('click', () => {
   
    arrIntervals.push(moveLine().interval)
    
})


export {
    btnStartLine, arrIntervals
}
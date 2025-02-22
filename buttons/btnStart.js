import { body, delta, moveCircleInterval, radius, x, y } from "../constants.js";
import { moveCircle } from "../functions/func.js";


let btnStart = document.createElement('div')
btnStart.setAttribute('class', 'btn')
btnStart.style.backgroundColor = "red";
btnStart.style.left = '470px'
btnStart.textContent = 'Start'
btnStart.addEventListener('click', () => {
    //    moveCircleInterval.push(moveCircle().interval)

    for (let tau = 0; tau < 144; tau++) {
        let circle_ = document.createElement('div')
        circle_.setAttribute('class', 'big-circle')
        circle_.style.left  = (x + radius * Math.cos(tau * delta) )+'px'
        circle_.style.top   = (y + radius * Math.sin(tau * delta) )+'px'
        let circleLine = document.createElement('div')
        circleLine.setAttribute('class','big-circle')
        circleLine.style.top = tau*5+'px'
        circleLine.style.left= tau*5+'px'
        body.appendChild(circle_)
        body.appendChild(circleLine)
    }

})
export {
    btnStart, moveCircleInterval
}
import { lineObj } from "../circles/circle_2.js"
import { arrIntervals } from "./btnStartLine.js"

let btnStopLine = document.createElement('div')
btnStopLine.setAttribute('class','btn')
btnStopLine.style.backgroundColor = 'blue'
btnStopLine.style.left = '750px'
btnStopLine.textContent = 'Stop'

btnStopLine.addEventListener('click',()=>{
    console.log(lineObj)
    clearInterval(arrIntervals[0])
    arrIntervals.shift()
})
export{
    btnStopLine
}
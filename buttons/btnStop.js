import { moveCircleInterval } from "./btnStart.js"

var btnStop = document.createElement('div')
btnStop.setAttribute('class','btn')
btnStop.style.left='350px'
btnStop.style.backgroundColor='red'
btnStop.textContent = 'Stop'
btnStop.addEventListener('click',()=>{
   clearInterval(moveCircleInterval[0])
   moveCircleInterval.shift()
})
export{
    btnStop
}
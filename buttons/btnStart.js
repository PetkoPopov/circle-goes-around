import { circle } from "../circles/circle_1.js"
import { moveCircle } from "../functions/func.js";

let moveCircleInterval=[]
let btnStart = document.createElement('div')
btnStart.setAttribute('class','btn')
btnStart.style.backgroundColor="red";
btnStart.style.left='470px'
btnStart.textContent= 'Start'
btnStart.addEventListener('click',()=>{
       moveCircleInterval.push(moveCircle(circle))
})
export{
    btnStart,moveCircleInterval
}
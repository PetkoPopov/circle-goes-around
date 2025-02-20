import { moveCircle } from "../functions/func.js";

let moveCircleInterval=[]
let btnStart = document.createElement('div')
btnStart.setAttribute('class','btn')
btnStart.style.backgroundColor="red";
btnStart.style.left='470px'
btnStart.textContent= 'Start'
btnStart.addEventListener('click',()=>{
       moveCircleInterval.push(moveCircle().interval)
})
export{
    btnStart,moveCircleInterval
}
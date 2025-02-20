import { speed,radius,x,y,delta } from "../constants.js"


let circle = document.createElement('div')
circle.setAttribute('class', 'circle')
circle.style.backgroundColor = 'red'

circle.style.top = y + 'px'
circle.style.left = x + 'px'
var circleObj ={
    circle:circle,
    coorX:x,
    coorY:y,
    n:0,
    name:"CIRCLE",
    radius:()=>{
       let res =  Math.floor(Math.sqrt(circleObj.coorX**2 + circleObj.coorY**2))
        return res
        }

}

export{
    circleObj
}
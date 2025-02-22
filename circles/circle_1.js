import { speed,radius,x,y,delta, circleSize } from "../constants.js"


let circle = document.createElement('div')
circle.setAttribute('class', 'circle')
circle.style.backgroundColor = 'red'
circle.style.width  = circleSize +'px'
circle.style.height = circleSize+'px'
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
        },
    ctrRadius:()=>{
        return Math.floor(Math.sqrt((circleObj.coorX-200) ** 2 + circleObj.coorY ** 2))

    }

}

export{
    circleObj
}
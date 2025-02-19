import { speed,radius,x,y,delta } from "../constants.js"


let circle = document.createElement('div')
circle.setAttribute('class', 'circle')
circle.style.backgroundColor = 'red'

circle.style.top = y + 'px'
circle.style.left = x + 'px'


export{
    circle
}
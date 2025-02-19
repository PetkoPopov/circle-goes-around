let x = 500
let y = 500
let radius = 200
let delta = 0.1

let body = document.getElementsByTagName('body')[0]

let circle = document.createElement('div')
circle.setAttribute('class','circle')
circle.style.backgroundColor='red'

circle.style.top=y+'px'
circle.style.left = x+'px'
let n = 0 

let movement = setInterval(()=>{
let y1 =y+radius*Math.cos(n*delta)
let x1 = x+radius*Math.sin(n*delta)
n++
    circle.style.top = y1 + 'px'
    circle.style.left = x1 + 'px'
},50)

let circle2 = document.createElement('div')
circle2.setAttribute('class','circle')
circle2.style.backgroundColor='blue'
let x2 = 0
let y2 = 0 
let countN = 0 
let move2 = setInterval(()=>{
    countN++
let x22 = countN*delta*20
let y22 = countN*delta*20
circle2.style.left = y22 + 'px'
circle2.style.top =  x22 + 'px'
},50)

body.appendChild(circle2)
body.appendChild(circle)
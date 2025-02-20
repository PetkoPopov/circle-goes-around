let circle2 = document.createElement('div')
circle2.setAttribute('class', 'circle')
circle2.style.backgroundColor = 'blue'

let lineObj = {
    circle: circle2,
    coorX: 0,
    coorY: 0,
    count:0,
    name:"LINE",
    radius: () => {
        return Math.floor(Math.sqrt(lineObj.coorX**2+lineObj.coorY**2))
    },
    ctrRadius:()=>{
        
            return Math.floor(Math.sqrt((lineObj.coorX - 200) ** 2 + lineObj.coorY ** 2))

        
    }
}

export {
    lineObj
}

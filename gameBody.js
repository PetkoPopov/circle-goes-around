import { btnStart } from "./buttons/btnStart.js"
import { btnStartLine } from "./buttons/btnStartLine.js"
import { btnStop } from "./buttons/btnStop.js"
import { lineObj } from "./circles/circle_2.js"
import { circle } from "./circles/circle_1.js"
import { btnStopLine } from "./buttons/btnStopLine.js"

let body = document.getElementsByTagName('body')[0]

body.appendChild(lineObj.circle)
body.appendChild(circle)
body.appendChild(btnStart)
body.appendChild(btnStop)
body.appendChild(btnStartLine)
body.appendChild(btnStopLine)
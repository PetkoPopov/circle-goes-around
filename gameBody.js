import { btnStart } from "./buttons/btnStart.js"
import { arrIntervals, btnStartLine } from "./buttons/btnStartLine.js"
import { btnStop } from "./buttons/btnStop.js"
import { lineObj } from "./circles/circle_2.js"
import { circleObj } from "./circles/circle_1.js"
import { btnStopLine } from "./buttons/btnStopLine.js"
import { body, moveCircleInterval } from "./constants.js"
import { moveCircle } from "./functions/func.js"



body.appendChild(lineObj.circle)
body.appendChild(circleObj.circle)
body.appendChild(btnStart)
body.appendChild(btnStop)
body.appendChild(btnStartLine)
body.appendChild(btnStopLine)
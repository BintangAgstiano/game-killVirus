const canvas = document.querySelector('canvas')
const wCanvas = canvas.width = 400
const hCanvas = canvas.height = 600
const ctx = canvas.getContext('2d');
const usernameInput = document.querySelector('.username');
const btnPlay = document.querySelector('.play');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const fail = document.querySelector('.fail');
const btnContinue = document.querySelector('.continue');
const playerName = document.querySelector('.player-name');
const timeGameOver = document.querySelector('.timeGameOver');
const scoreGameOver = document.querySelector('.scoreGameOver');
const playerGameOver = document.querySelector('.playerGameOver');
const restartGameOver2 = document.querySelector('.restartGameOver2');
const popupScreenAwal = document.querySelector('.popup-screen-awal');
const popupPause = document.querySelector('.popup-pause');
const timerScreen = document.querySelector('.timer-screen');
const popupTimerScreen = document.querySelector('.popup-timer-screen');
const popupGameOver = document.querySelector('.popup-gameover');
const btnRestartGameOver = document.querySelector('.restartGameOver');
const btnRestart = document.querySelector('.restart');
const line1 = document.querySelector('.line:nth-child(1)');
const line2 = document.querySelector('.line:nth-child(2)');
const line3 = document.querySelector('.line:nth-child(3)');
const line4 = document.querySelector('.line:nth-child(4)');
const btnQuit = document.querySelector('.quit');
const virusImg = new Image();
let scoreVar = 0
score.innerHTML = scoreVar
let coronaVirusArr = [];
let menit = 0
let detik = 0
let intervalScreenTimer

timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
virusImg.src = './images/coronavirus-gaedba68d4_1280.png'
virusImg.onload = () => {
    drawVirus();
}
restartGameOver2.addEventListener('click', function () {

    coronaVirusArr = []
    failVar = 0
    scoreVar = 0
    menit = 0
    detik = 0
    timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`

    fail.innerHTML = failVar
    score.innerHTML = scoreVar
    popupGameOver.style.display = 'none'

    let detikScreen = 3
    timerScreen.innerHTML = detikScreen
    popupTimerScreen.style.display = 'flex'
    intervalScreenTimer = setInterval(() => {
        detikScreen--
        timerScreen.innerHTML = detikScreen
        if (detikScreen < 1) {
            clearInterval(intervalScreenTimer)
            popupTimerScreen.style.display = 'none'

            startIntervalTimer()
            startIntervalVirus()
            startIntervalRun()
        }
    }, 1000);

})
btnQuit.addEventListener('click',function(){
    clearInterval(intervaltimer)

    clearInterval(intervalvirus)
    clearInterval(intervalRun)
    usernameInput.value=''
    coronaVirusArr = []
    failVar = 0
    scoreVar = 0
    menit = 0
    detik = 0
    timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
    fail.innerHTML = failVar
    score.innerHTML = scoreVar
    popupScreenAwal.style.display='flex'
})
let failVar = 0
fail.innerHTML = failVar
usernameInput.value == ''
let isClick = false
usernameInput.addEventListener('change', function () {
    if (usernameInput.value == '') {
        isClick = false
    } else {
        isClick = true

    }
})

let intervaltimer

function startIntervalTimer() {
    intervaltimer = setInterval(() => {
        detik++
        timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
        if (detik > 59) {
            detik = 0
            menit++
            timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`

        }
    }, 1000);
}

btnContinue.addEventListener('click', function () {
    popupPause.style.display = 'none'
    let detikScreen = 3
    timerScreen.innerHTML = detikScreen
    popupTimerScreen.style.display = 'flex'
    intervalScreenTimer = setInterval(() => {
        detikScreen--
        timerScreen.innerHTML = detikScreen
        if (detikScreen < 1) {
            clearInterval(intervalScreenTimer)
            popupTimerScreen.style.display = 'none'

            startIntervalTimer()
            startIntervalVirus()
            startIntervalRun()
        }
    }, 1000);

})

btnRestartGameOver.addEventListener('click', function () {
    clearInterval(intervaltimer)

    clearInterval(intervalvirus)
    clearInterval(intervalRun)
    coronaVirusArr = []
    failVar = 0
    scoreVar = 0
    menit = 0
    detik = 0
    timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`

    fail.innerHTML = failVar
    score.innerHTML = scoreVar
    popupPause.style.display = 'none'
    let detikScreen = 3
    timerScreen.innerHTML = detikScreen
    popupTimerScreen.style.display = 'flex'
    intervalScreenTimer = setInterval(() => {
        detikScreen--
        timerScreen.innerHTML = detikScreen
        if (detikScreen < 1) {
            clearInterval(intervalScreenTimer)
            popupTimerScreen.style.display = 'none'

            startIntervalTimer()
            startIntervalVirus()
            startIntervalRun()
        }
    }, 1000);

})
btnRestart.addEventListener('click', function () {
    clearInterval(intervaltimer)

    clearInterval(intervalvirus)
    clearInterval(intervalRun)
    coronaVirusArr = []
    failVar = 0
    scoreVar = 0
    menit = 0
    detik = 0
    timer.innerHTML = `${menit.toString().padStart(2, '0')} : ${detik.toString().padStart(2, '0')}`
    fail.innerHTML = failVar
    score.innerHTML = scoreVar
    popupPause.style.display = 'none'
    let detikScreen = 3
    timerScreen.innerHTML = detikScreen
    popupTimerScreen.style.display = 'flex'


    intervalScreenTimer = setInterval(() => {
        detikScreen--
        timerScreen.innerHTML = detikScreen
        if (detikScreen < 1) {
            clearInterval(intervalScreenTimer)
            popupTimerScreen.style.display = 'none'

            startIntervalTimer()
            startIntervalVirus()
            startIntervalRun()
        }
    }, 1000);
          
      
  

})

btnPlay.addEventListener('click', function () {
    if (isClick) {
        popupScreenAwal.style.display = 'none'
        playerName.innerHTML = usernameInput.value;
        popupTimerScreen.style.display='flex'
        let detikScreen = 3
        timerScreen.innerHTML = detikScreen

       intervalScreenTimer= setInterval(() => {
            detikScreen--
            timerScreen.innerHTML=detikScreen
            if(detikScreen<1){
                clearInterval(intervalScreenTimer)
                popupTimerScreen.style.display = 'none'

                main()
            }
        }, 1000);
    }
})
let intervalvirus
function startIntervalVirus() {
    intervalvirus = setInterval(() => {

        let xRand = Math.floor(Math.random() * 4);
        let x = xRand * (wCanvas / 4) + 10
        coronaVirusArr.push({ x: x, y: 0 });
        drawVirus()
    }, 1000);
}
function drawVirus() {
    coronaVirusArr.forEach(v => {

        ctx.drawImage(virusImg, v.x, v.y, 80, 80)
        v.y += 3
        coronaVirusArr.forEach((v, i) => {
            if (v.y == 450) {
                coronaVirusArr.splice(i, 1)
                failVar += 1
                fail.innerHTML = failVar
                if (failVar == 5) {
                    popupGameOver.style.display = 'flex'
                    clearInterval(intervaltimer)

                    clearInterval(intervalvirus)
                    clearInterval(intervalRun)
                    timeGameOver.innerHTML=timer.innerHTML
                    scoreGameOver.innerHTML=score.innerHTML
                    playerGameOver.innerHTML=playerName.innerHTML
                }
            }
        })
    })
}
let intervalRun
function startIntervalRun() {
    intervalRun = setInterval(() => {
        ctx.clearRect(0, 0, wCanvas, hCanvas)
        drawBoardSecond()
        drawBoard()
        drawVirus()
    }, 20);

}


function drawBoard() {
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 2
        ctx.rect(i * (wCanvas / 4), 0, wCanvas / 4, 450)
        ctx.stroke()

    }
}
function drawBoardSecond() {

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 4; j++) {
            ctx.beginPath();

            if (i == 1) {
                ctx.fillStyle = 'rgba(255, 0, 0, 0.34)'
            }
            ctx.rect(j * (wCanvas / 4), i * (450 / 2), wCanvas / 4, 450 / 2)
            if (i == 1) {
                ctx.fill();
            }
        }

    }
}

function update(e) {
    if (e.key === 'd') {
        line1.style.opacity='1'
        setTimeout(() => {
            line1.style.opacity = '0'

        }, 50);
        coronaVirusArr.forEach((v, i) => {
            if (v.y >= 200) {
                if (v.x === 0 * (wCanvas / 4) + 10) {
                    coronaVirusArr.splice(i, 1)
                    scoreVar += 1
                    score.innerHTML = scoreVar

                }
            }
        })
    }
    if (e.key === 'f') {
        line2.style.opacity = '1'
        setTimeout(() => {
            line2.style.opacity = '0'

        }, 50);
        coronaVirusArr.forEach((v, i) => {
            if (v.y >= 200) {
                if (v.x === 1 * (wCanvas / 4) + 10) {
                    coronaVirusArr.splice(i, 1)
                    scoreVar += 1
                    score.innerHTML = scoreVar
                }
            }
        })
    }
    if (e.key === 'j') {
        line3.style.opacity = '1'
        setTimeout(() => {
            line3.style.opacity = '0'

        }, 50);
        coronaVirusArr.forEach((v, i) => {
            if (v.y >= 200) {
                if (v.x === 2 * (wCanvas / 4) + 10) {
                    coronaVirusArr.splice(i, 1)
                    scoreVar += 1
                    score.innerHTML = scoreVar
                }
            }
        })
    }
    if (e.key === 'k') {
        line4.style.opacity = '1'
        setTimeout(() => {
            line4.style.opacity = '0'

        }, 50);
        coronaVirusArr.forEach((v, i) => {
            if (v.y >= 200) {
                if (v.x === 3 * (wCanvas / 4) + 10) {
                    coronaVirusArr.splice(i, 1)
                    scoreVar += 1
                    score.innerHTML = scoreVar
                }
            }
        })
    }


}
function main() {
    document.addEventListener('keydown', update)
    ctx.clearRect(0, 0, wCanvas, hCanvas)
    drawBoard()
    drawBoardSecond()
    startIntervalVirus()
    drawVirus()
    startIntervalRun()
    startIntervalTimer()
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            popupPause.style.display = 'flex'
            clearInterval(intervalvirus)
            clearInterval(intervalRun)
            clearInterval(intervaltimer)
        }
    })

}
// main();
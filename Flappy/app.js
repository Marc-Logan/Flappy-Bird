console.log('hello')

document.addEventListener('DOMContentLoaded', () => {

const bird = document.querySelector('.bird')
const gameDisplay = document.querySelector('.board')

  
let birdLeft = 220
let birdBottom = 300
let gravity = 2

function startGame(){
    birdBottom = birdBottom - gravity
    bird.style.bottom = birdBottom + 'px'
    bird.style.left = birdLeft + 'px'
}
startGame()
let timerId = setInterval(startGame, 20)

function jump(){
    if (birdBottom < 500) birdBottom += 50;
    bird.style.bottom = birdBottom + 'px';
    console.log(birdBottom)
}

document.addEventListener('keyup', jump)

function newObstacle(){
    let obstacleLeft = 500
    let randomHeight = Math.random() * 60
    let obstacleBottom = randomHeight
   const obstacle = document.createElement('div')
   obstacle.classList.add('obstacle')
   gameDisplay.appendChild(obstacle)
   obstacle.style.left = obstacleLeft + 'px'
   obstacle.style.bottom = obstacleBottom + 'px'

    function moveObstacle(){
        obstacleLeft -= 2
        obstacle.style.left = obstacleLeft + 'px'

        if (obstacleLeft === -60){
            clearInterval(timerID)
            gameDisplay.removeChild(obstacle)
        }
    }
    let timerID = setInterval(moveObstacle, 20)
    setTimeout(newObstacle, 3000)
    
   
}
newObstacle()



})


 

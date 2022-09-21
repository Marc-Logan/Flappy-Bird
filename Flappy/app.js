document.addEventListener('DOMContentLoaded', () => {

const bird = document.querySelector('.bird')
const gameDisplay = document.querySelector('.board')
const ground = document.querySelector('.ground')

let birdLeft = 220
let birdBottom = 100


function startGame(){
    bird.style.bottom = birdBottom + 'px'
    bird.syle.left = birdLeft + 'px'
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
    
   const obstacle = document.createElement('div')
   obstacle.classList.add('obstacle')
   gameDisplay.appendChild(obstacle)
   obstacle.style.left = obstacleLeft + 'px'
}
newObstacle()

})


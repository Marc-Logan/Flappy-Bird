

document.addEventListener('DOMContentLoaded', () => {

    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.board')


    let birdLeft = 100
    let birdBottom = 300
    let gravity = 2
    let isGameOver = false
    let gap = 430

    function moveBird() {
        birdBottom = birdBottom - gravity
        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }

    moveBird()
    let gameTimerId = setInterval(moveBird, 20)

    function jump() {
        if (birdBottom < 500) birdBottom += 50;
        bird.style.bottom = birdBottom + 'px';
        console.log(birdBottom)
    }

    document.addEventListener('keyup', jump)

    function newObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 100
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        const topObstacle = document.createElement('div')

        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            topObstacle.classList.add('topObstacle')
        }
        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(topObstacle)
        obstacle.style.left = obstacleLeft + 'px'
        topObstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'
        topObstacle.style.bottom = obstacleBottom + gap + 'px'

        function moveObstacle() {

            if(isGameOver) {
                return;
            }

            obstacleLeft -= 2
            obstacle.style.left = obstacleLeft + 'px'
            topObstacle.style.left = obstacleLeft + 'px'

            if (obstacleLeft === 0) {
                clearInterval(timerID)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(topObstacle)
            }

            console.log('obstacleLeft: ' + obstacleLeft);
            console.log('birdLeft: ' + birdLeft);
            console.log('obstacleBottom: ' + obstacleBottom);
            console.log('birdBottom: ' + birdBottom);
            //obstacleLeft > 200 &&




            if ((obstacleLeft > 100 &&
                obstacleLeft < 160 &&
                (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + 250)) ||
                birdBottom === 0
            ) {
                gameOver();
                clearInterval(timerID); //stop moving current obstacle
                console.log("..... stop moving obstacle in position .....", obstacleLeft)
            } 
        }
        let timerID = setInterval(moveObstacle, 20)
        if (!isGameOver) {
            setTimeout(newObstacle, 3000)
        }


    }
    newObstacle()

    function gameOver() {
        clearInterval(gameTimerId); //stop moving bird
        console.log('game over')
        isGameOver = true
        document.removeEventListener('keyup', jump)
    }


})




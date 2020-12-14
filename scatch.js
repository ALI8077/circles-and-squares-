//create array
let balloons = []
let gameOver = false
let result

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 40; i++) {
    //add new balloon to balloons array
    balloons.push(createBalloon())
  }
}

function draw() {
  background(220);
  for (let i = 0; i < balloons.length; i++) {
    if (balloons[i].active == true) {
      drawBalloon(balloons[i])
    }
  }
  
  if (gameOver) {
    text(result, width/2,height/2)
  }
}

function drawBalloon(b) {
  fill(b.color)
  circle(b.x, b.y, b.size)
}

function mouseClicked() {
  for (let i = 0; i < balloons.length; i++) {
    mouseVsBalloon(balloons[i])
  }
}

function mouseVsBalloon(b) {
  if (dist(b.x, b.y, mouseX, mouseY) < b.size) {
    b.active = false
    if (countBalloonsLeft() == 0) {
      gameOver = true
      result = "You Win!"
    }
    console.log(b.x)
  }
}

function countBalloonsLeft() {
  let balloonsLeft = 0
  for (let i=0;i<balloons.length;i++) {
    if (balloons[i].active) {
      balloonsLeft++
    }
  }
  return balloonsLeft
}

function createBalloon() {
  let newBalloon = {}
  newBalloon.x = random(width)
  newBalloon.y = random(height)
  newBalloon.color = "red"
  newBalloon.size = 30
  newBalloon.active = true
  return newBalloon
}

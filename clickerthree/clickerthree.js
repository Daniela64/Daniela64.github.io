var ballx = 300;
var bally = 300;
var ballSize = 55;
var score = 0;
var gameState = "L1";
var img, img2, img3, img4;

function preload() {
  img = loadImage('https://daniela64.github.io/webs.png');
  img2 = loadImage('https://daniela64.github.io/fly.png');
  img3 = loadImage('https://daniela64.github.io/spiderandfly.jpg');
  customCursor = loadImage('https://daniela64.github.io/wolfspider.png');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(img);
  fill(0, 255, 0);
  text("score: " + score, width / 2, 40);
  image(customCursor, mouseX - 24, mouseY - 24, 100, 100);
  
  if (gameState == 'L0'){
    start();
  }
  
  if (gameState == "L1") {
    levelOne();
  }
  
  if (gameState == "L2") {
    levelTwo();
  }
  
  if (gameState == "L3") {
    levelThree();
  }
  
  if (gameState == "L4") {
    levelFour();
  }

  if (gameState == "END") {
    endGame();
    fill(0);
    text("Score: " + score, width / 2, 40);
  }
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  stroke(255);
  
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 15) {
    gameState = "L2";
  }

  line(ballx, bally, mouseX, mouseY);
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end of levelOne

function levelTwo() {
  background(img);
  image(customCursor, mouseX - 24, mouseY - 24, 100, 100);
  text("score: " + score, width / 2, 40);
  text("Level 2", width / 2, height - 20);
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  if (score >= 25) {
    gameState = "L3";
  }

  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end of levelTwo

function levelThree() {
  background(img);
  image(customCursor, mouseX - 24, mouseY - 24, 100, 100);
  text("score: " + score, width / 2, 40);
  text("Level 3", width / 2, height - 20);
  
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
    if (ballSize > 15) {
      ballSize -= 2;
    }
  }

  if (score >= 45) {
    gameState = "L4";
  }

  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end of levelThree

// Ball movement variables for Level 4
var ballVelocityX = random(2, 5);  // Random velocity on X-axis (horizontal)
var ballVelocityY = random(2, 5);  // Random velocity on Y-axis (vertical)

function levelFour() {
  background(img);  // You can change this image if you want a different background for Level 4
  image(customCursor, mouseX - 24, mouseY - 24, 100, 100);
  text("score: " + score, width / 2, 40);
  text("Level 4", width / 2, height - 20);

  // Set the ball size for Level 4
  ballSize = 18; 


  // Check if the mouse clicks on the ball
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }

  // End the game when score reaches 60
  if (score >= 60) {
    gameState = "END";
  }

  // Draw the ball with the updated size
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
} // end of levelFour

function endGame() {
  background(img3);
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(2);
  textSize(30);
  text("You did it!", width / 2, height / 2 - 40);
  textSize(20);
  text("Final Score: " + score, width / 2, height / 2);
  text("Press any key to restart", width / 2, height / 2 + 40);
}

function keyPressed() {
  if (gameState == "END") {
    score = 0;
    ballSize = 55;
    ballx = random(width);
    bally = random(height);
    gameState = "L1";
  }
} // end of keyPressed

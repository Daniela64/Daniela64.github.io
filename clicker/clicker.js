
var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1"

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
} // end of setup

function draw() {
  background(250);
  if(gameState == "L1"){
   levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
    levelThree();
  }
  
  text("Score: " + score, width / 2, 40); // fixed text placement
} // end of draw

function levelOne() {
  text("Level 1", width / 2, height - 20);
  
  var distToBall = dist(ballx, bally, mouseX, mouseY); // fixed typo
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1; // fixed typo (score, not source)
  }

  if(score>=5){
  gameState = "L2"
  
}

  line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end of levelOne



function levelTwo() {
    background(200, 100, 0);
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY); // fixed typo
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1; // fixed typo (score, not source)
  }

  if(score>=10){
  gameState = "L3";
  
  }

  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end of levelTwo


function levelThree() {
  background(200, 100, 200);
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY); // fixed typo
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1; // fixed typo (score, not source)
    ballSize = ballSize -5;
  }

  if(score>=20){
  background(random(255));
  
  }

  //line(ballx, bally, mouseX, mouseY);
  ellipse(ballx, bally, ballSize, ballSize);
} // end of levelThree

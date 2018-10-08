let balls = []

const gravity = 0.1;

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  for (let i = balls.length - 1; i >=0; i--){
    if (balls[i].rollover(mouseX, mouseY)){
      balls.splice(i,1);
    }
  }
}

function mouseDragged(){
  const r = random(10,50);
  const b = new Ball(mouseX, mouseY, r, 1);
  balls.push(b);
}

function draw() {
  background(220);
  
  // for ball in balls
  for (let i = 0; i < balls.length; i++){
    if (balls[i].rollover(mouseX, mouseY)){
      balls[i].changeColor();
    }
    else {
      balls[i].changeBack();
    }
    balls[i].display();
    balls[i].move();
    balls[i].bounce();
  }
}
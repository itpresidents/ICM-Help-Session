let balls = []

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < 10; i ++) {
	const r = random(10,50);
    const b = new Ball(30 + 60*i, 60 + 20*i, r, 1);
    balls.push(b);
  }
  
}

// function mousePressed() {
//   let r = random(10,50);
//   let b = new Ball(mouseX, mouseY, r, 1);
//   balls.push(b);
// }

function mouseDragged(){  
  for (let i = 0; i < balls.length; i++){
    if (balls[i].rollover(mouseX, mouseY)){
      balls[i].move();
    }
  }
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
    //balls[i].move();
    //balls[i].bounce();
  }
}


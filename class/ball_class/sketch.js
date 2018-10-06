function setup() {
    createCanvas(400,400);
    ball = new Ball(width/2, height/2);
}


function draw() {
    ball.move();
    ball.display();
 
}
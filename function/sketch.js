let mouseFlg;

function setup() {
    createCanvas(400,400);
    background(0);
    mouseFlg = false;
}

function draw() {
    if(mouseFlg) {
        // if mouseFlg true: draw circles
        drawCircles();
    } else {
        // if mouseFlg false: black canvas
        background(0);
    }
}

function drawCircles() {
    // draw circles
    for(let i=0; i<100; i++) {
        stroke(random(255),random(255),random(255));
        noFill();
        ellipse(random(width), random(height), random(10));
    }
}

function mousePressed() {
    // if mouseFlg true --> store false
    // if mouseFlg false --> store true
    mouseFlg = !mouseFlg;
}
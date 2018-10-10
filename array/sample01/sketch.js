let x = []; // array for xPos
let y = []; // array for yPos

function setup() {
    createCanvas(400,400);
    const circleNum = 100;
    for(let i=0; i<circleNum; i++) {
        x.push(random(width));    // store xPos
        y.push(random(height));   // store yPos
    }
}

function draw() {
    // x.length = array x's size(length)
    for(let i=0; i<x.length; i++) {
        ellipse(x[i], y[i], random(1,11));
    }
}


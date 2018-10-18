function setup() {
    createCanvas(400, 400);
    background(0);
    const button = createButton('click me');
    button.position(19, 19);
    button.mousePressed(changeBG);
}

function changeBG() {
  const r = random(255); // red
  const g = random(255); // green
  const b = random(255); // blue
  const val = color(r, g, b);
  background(val);
}

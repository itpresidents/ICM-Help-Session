let inputA, inputB, button;
let addVal = 0;

function setup() {
  // create canvas
  createCanvas(710, 400);

  inputA = createInput('0');
  inputA.position(20, 65);

  inputB = createInput('0');
  inputB.position(200, 65);
  
  button = createButton('add');
  button.position(inputA.x, 105);
  button.mousePressed(add);

  // symbols
  text('+', inputA.x + inputA.width + 10, 70);
  text('=', inputB.x + inputB.width + 10, 70);  
}

function add() {
  console.log("add");
  text('', inputB.x + inputB.width + 25, 70);
  // you need to Number() because input.value() is string
  // if you don't cast type, the result will be 1020(a:10 b:20)
  addVal = Number(inputA.value()) + Number(inputB.value());
  text(addVal, inputB.x + inputB.width + 25, 70);
  // console.log("a + b =", addVal);
  
}
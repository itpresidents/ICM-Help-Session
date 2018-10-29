function Cnv1(sketch) {

  var x = [];
  var y = [];

  sketch.setup = function() {
    sketch.createCanvas(300, 300);
    sketch.createP("canvas1");
    for (i = 0; i <= 5; i++) {
      x[i] = sketch.width / 5 * i;
      y[i] = sketch.height / 5 * i;
    }
    sketch.rectMode(sketch.CENTER);
  };

  sketch.draw = function() {
    sketch.background(255);
    sketch.fill(sketch.random(255),sketch.random(255),sketch.random(255));
    for (i = 0; i <= 5; i++) {
      for (j = 0; j<= 5; j++) {
      sketch.ellipse(x[i], y[j], 20, 20);
      }
    }
  };
}
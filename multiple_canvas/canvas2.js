
    
function Cnv2 (sketch) {

    let x = 0; 
    let y = 0;
    let a = 10;
  
    sketch.setup = function() {
      sketch.createCanvas(300, 300);
          sketch.createP("canvas2");
    };
  
    sketch.draw = function() {
      sketch.background(255,0,0);
      sketch.fill(0,255,0);
      sketch.rect(x,y,50,50);
      sketch.fill(0,0,255);
      sketch.ellipse(y,x,50,50);
          x=x+a;
          y=y+a/2;
      if(x>sketch.width||x<0){
        a=a*-1;
      }
    };
  }
  
  
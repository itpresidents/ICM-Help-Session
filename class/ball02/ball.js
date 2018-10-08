class Ball {
    constructor (bx, by, br, bspeed) {
      this.x = bx ;
      this.y = by ;
      this.r = br ;
      this.speed = bspeed;
      this.blue = 0;
    }
    
    rollover (px, py) {
      const d = dist(px, py, this.x, this.y);
      const val = d < this.r ;
      //print(val) ;
      return val ;
    }
    
    changeColor() {
      this.blue = 255 ;
    }
    
    changeBack() {
      this.blue = 0 ;
    }
    
    display() {
        fill(0,0,this.blue,100);
        ellipse(this.x, this.y, this.r, this.r);
      }
    
    move() {
      this.y = this.y + this.speed;
      this.speed = this.speed + gravity;
    }
    
    bounce() {
      if (this.y > height) {
          this.speed = this.speed * -0.95;
        }
    }
  } //end class Ball
  
  
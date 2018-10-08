class Ball {
    constructor (bx, by, br) {
      this.x = bx ;
      this.y = by ;
      this.r = br ;
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
      const offsetx = mouseX - this.x ;
      const offsety = mouseY - this.y ;
      
      this.x = this.x + offsetx ;
      this.y = this.y + offsety ;
      
    }
    
  } //end class Ball
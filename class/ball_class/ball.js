class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
    // move method to move ball
    move() {
        this.x = this.x + random(-10,10);
        this.y = this.y + random(-10,10);
    }
    
    // display method to show a ball
    display() {
        fill(random(255), random(255), random(255));
        ellipse(this.x, this.y, 30);
    }
  }
class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = 0;
    this.eAngle = Math.PI * 2;

    this.Gx = x + 10;
    this.Gy = y + 5;

    this.speed = 1;

    this.colors = {
      s: "#fff",
      e: "rgb(191,173,111)"
    };

    this.out = false
  }
  run(rad) {
    this.x = this.x + Math.cos(rad) * this.speed;
    this.y = this.y + Math.sin(rad) * this.speed;
  }
  getAxis(rad) {
    let b_y = Math.sin(rad) * this.r + this.y;
    let b_x = Math.cos(rad) * this.r + this.x;
    return { b_x, b_y };
  }
  changeSpeed(speed) {
    this.speed = speed;
  }
  changeDirection() {
      
  }
  stop() {
    this.x = this.x;
    this.y = this.y;
  }
  cout() {
    this.out = true
  }
  cin() {
    this.out = false
  }
}

export default Ball;

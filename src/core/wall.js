class Wall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = 0;
    this.eAngle = Math.PI * 2;
  }
  getx(radius) {
    let _y = Math.cos(radius) * (this.r-5) + this.y;
    let _x = Math.sin(radius) * (this.r-5)+ this.x;
    return { _x, _y };
  }
}

export default Wall;

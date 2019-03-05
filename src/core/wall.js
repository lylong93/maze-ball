class Wall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle = 0;
    this.eAngle =((2 * Math.PI) / 360) * 290

    this.doors = []
  }
  getAxis(rad) {
    // console.log(rad)
    // let w_y = Math.cos(rad) * (this.r-5) + this.y;
    // let w_x = Math.sin(rad) * (this.r-5)+ this.x;
    let w_y = Math.sin(rad) * (this.r-5) + this.y;
    let w_x = Math.cos(rad) * (this.r-5)+ this.x;
    return { w_x, w_y };
  }
  getDoors() {
    
  }
}

export default Wall;

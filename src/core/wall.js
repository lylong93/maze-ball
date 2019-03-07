import { _format } from "./units";
class Wall {
  constructor(x, y, r, s, e) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle;
    this.eAngle;

    this.doors = [];
    this.lin = {};

    this.getDoors();
    this._init(s,e);
  }
  getAxis(rad) {
    let w_y = Math.sin(rad) * (this.r + 5) + this.y;
    let w_x = Math.cos(rad) * (this.r + 5) + this.x;
    return { w_x, w_y };
  }
  getDoors() {
    // 门的临界点x
    let o = ((2 * Math.PI) / 360) * 300;
    this.lin = this.getAxis(o);
  }
  _init(s,e) {
    // 绘制路线
    this.sAngle = ((2 * Math.PI) / 360)* e
    this.eAngle = ((2 * Math.PI) / 360)* (s+360)

    // 
    let _s = ((2 * Math.PI) / 360) * s;
    let _e = ((2 * Math.PI) / 360) * e;

    let sAxis = this.getAxis(_s)
    let eAxis = this.getAxis(_e)

    let door = {
      sA:s,
      eA:e,
      sAxis,
      eAxis
    }
    this.doors.push(door)
  }
}

export default Wall;

import { _format } from "./units";
class Wall {
  constructor(x, y, r, s, e) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.sAngle;
    this.eAngle;
    this.w = 10;

    this.doors = [];
    this.lin = {};

    this._init(s,e);
  }
  getAxis(rad,opt) {
    let _r
    if (opt==='in') {
      _r = (this.r - this.w/2)
    } else if (opt==='out') {
      _r = (this.r + this.w/2)
    }
    let w_y = Math.sin(rad) * _r + this.y;
    let w_x = Math.cos(rad) * _r + this.x;
    return { w_x, w_y };
  }
  _init(s,e) {
    // 绘制路线
    this.sAngle = ((2 * Math.PI) / 360)* e
    this.eAngle = ((2 * Math.PI) / 360)* (s+360)

    let _s = ((2 * Math.PI) / 360) * s;
    let _e = ((2 * Math.PI) / 360) * e;

    let sAxis = this.getAxis(_s,'in')
    let eAxis = this.getAxis(_e,'in')

    let sAxisOut = this.getAxis(_s,'out')
    let eAxisOut = this.getAxis(_e,'out')

    let door = {
      sA:s,
      eA:e,
      sAxis,
      eAxis,
      sAxisOut,
      eAxisOut
    }
    this.doors.push(door)
  }
}

export default Wall;

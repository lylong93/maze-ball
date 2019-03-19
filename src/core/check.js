import { _format, _rformat } from "./units";

let angle = 0;
let rad = _format(angle);

let check = (walls, ball) => {
  //  ball.cout();
  // let speed = 1;
  // 加权
  // let weighed = 1;

  let wall;
  let inswall;

  // 环范围
  let Search = (ball, walls) => {
    let _wall ;
    let _inswall ;
    // debugger
    if (ball.cneterD+5 < walls[0].r-5) {
      _wall = walls[0];
      _inswall = null;
      return { _wall, _inswall };
    }
    for (let i = 0; i < walls.length; i++) {
      if (ball.cneterD-5 > walls[i].r+5 && ball.cneterD+5 < walls[i + 1].r-5) {
        _inswall = walls[i];
        _wall = walls[i + 1];
        return { _wall, _inswall };
      } 
    }
    return { _wall, _inswall };
  };

  // 进环内重新计算
  // if (!ball.out) {
    // debugger
  let { _wall, _inswall } = Search(ball, walls);

  wall = _wall;
  inswall = _inswall;
  debugger
  if(!wall&&!inswall) {
    ball.run(rad);
    return
  } 

  let flag = _detect(ball, wall, inswall);

  if (flag) {
    _collision();
    ball.run(rad);
  } else {
    ball.run(rad);
  }
};

//inswall
let _detect = (ball, wall, inswall) => {
  //内壁
  //inswall
  if (inswall) {
    let _ix = Math.abs(inswall.x - ball.x);
    let _iy = Math.abs(inswall.y - ball.y);

    let id = Math.sqrt(_ix * _ix + _iy * _iy);
    let k = Math.abs(ball.r + inswall.r)+5;

    // 内壁碰撞
    if (id <= k ) {
      let rr = Math.abs(inswall.y - ball.y);
      let ang = rr / id;
      let _a = Math.asin(ang);

      let dd;
      if (angle < 180) {
        // 下半球
        if (ball.x > wall.x) {
          // 右半球
          dd = _rformat(_a);
        } else {
          dd = 180 + _rformat(_a);
        }
      } else {
        // 上半球
        if (ball.x > wall.x) {
          // 右半球
          dd = 360 - _rformat(_a);
        } else {
          //左半球
          dd = 180 + _rformat(_a);
        }
      }
      let door = inswall.doors[0];
      // console.log(dd)
      if (dd < door.eA && dd > door.sA) {
        let _xx = Math.abs(door.sAxisOut.w_x - ball.x);
        let _yy = Math.abs(door.sAxisOut.w_y - ball.y);

        let _dd = Math.sqrt(_xx * _xx + _yy * _yy);

        let _xxe = Math.abs(door.eAxisOut.w_x - ball.x);
        let _yye = Math.abs(door.eAxisOut.w_y - ball.y);

        // let _dd = Math.sqrt(_xx * _xx + _yy * _yy);
        let _dde = Math.sqrt(_xxe * _xxe + _yye * _yye);

        if (_dd <= ball.r || _dde <= ball.r) {

          return true;
        } else {
          return false;
        }
      } else {
        // console.log(dd)
        return true;
      }
    }
  }

  //外壁
  //wall
  let _x = Math.abs(wall.x - ball.x)
  let _y = Math.abs(wall.y - ball.y)

  let d = Math.sqrt(_x * _x + _y * _y);
  let o = Math.abs(ball.r - wall.r)-5;

  if (d >= o ) {
    let rr = Math.abs(wall.y - ball.y);
    let ang = rr / d;
    let _a = Math.asin(ang);

    let dd;
    // 判断球落方向点的角度
    if (angle > 180) {
      // 上半球
      if (ball.x > wall.x) {
        // 右半球
        dd = 360 - _rformat(_a);
      } else {
        dd = 180 + _rformat(_a);
      }
    } else {
      // 下半球
      if (ball.x > wall.x) {
        // 右半球
        dd = _rformat(_a);
        // dd = 180 - _rformat(_a);
      } else {
        dd = 180 - _rformat(_a);
      }
    }
    // 门判断
    let door = wall.doors[0];
    // console.log(dd)
    if (dd < door.eA && dd > door.sA) {
      let _xx = Math.abs(door.sAxis.w_x - ball.x);
      let _yy = Math.abs(door.sAxis.w_y - ball.y);
      
      let _xxe = Math.abs(door.eAxis.w_x - ball.x);
      let _yye = Math.abs(door.eAxis.w_y - ball.y);

      let _dd = Math.sqrt(_xx * _xx + _yy * _yy);

      let _dde = Math.sqrt(_xxe * _xxe + _yye * _yye);

      if (_dd < ball.r || _dde < ball.r) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  return false;
};

// 触发碰撞
let _collision = () => {
  // 改变角度
  if (angle < 180) {
    angle = 180 + angle;
    rad = _format(angle);
  } else {
    angle = angle - 180;
    rad = _format(angle);
  }
};

export default check;
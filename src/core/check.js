import { _format, _rformat } from "./units";

let s = true;

let angle = 150;

let rad = _format(angle);

let check = (walls, ball) => {
  let speed = 1;

  // 加权
  let weighed = 1;

  let wall;
  let inswall;

  // 环范围
  let Search = (ball, walls) => {
    let _wall;
    let _inswall;
    for (let i = 0; i < walls.length; i++) {
      if (ball.cneterD < walls[i].r) {
        _wall = walls[i];
        _inswall = null;

        return { _wall, _inswall };
      }
      if (ball.cneterD > walls[i].r && ball.cneterD < walls[i + 1].r) {
        _inswall = walls[i];
        _wall = walls[i + 1];
        return { _wall, _inswall };
      }
    }
  };

  // 进环内重新计算
  if (!ball.out) {
    let { _wall, _inswall } = Search(ball, walls);
    wall = _wall;
    //  console.log(inswall)
    inswall = _inswall;
    //  console.log(inswall)
  }

  walls.map(item => {
    // console.log(item.r)
    wall = item;
  });

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

  //外壁
  //wall
  // 5 壁宽
  let _x = Math.abs(wall.x - ball.x) + 5;
  let _y = Math.abs(wall.y - ball.y) + 5;

  let d = Math.sqrt(_x * _x + _y * _y);
  let o = Math.abs(ball.r - wall.r);

  //内壁
  //inswall
  let _ix = Math.abs(inswall.x - ball.x) - 5;
  let _iy = Math.abs(inswall.y - ball.y) - 5;
  let id = Math.sqrt(_ix * _ix + _iy * _iy);
  let k = Math.abs(ball.r + inswall.r);


  if (d < o) {
    ball.cin();
  }


  // 内壁碰撞
  if (id <= k && !ball.out) {
    // console.log("pp");
    let rr = Math.abs(inswall.y - ball.y);
    let ang = rr / d;
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
    
    let door = inswall.doors[0]
    if (dd < door.eA && dd > door.sA) {

      console.log(door)
      let _xx = Math.abs(door.sAxis.w_x - ball.x);
      let _yy = Math.abs(door.sAxis.w_y - ball.y);

      let _dd = Math.sqrt(_xx * _xx + _yy * _yy);

      if (_dd < ball.r) {
        // debugger
        console.log('触发')
        // ball.cout();
        return true;
      } else {
        return false;
      }
    }

    return true;
  }
 
  if (d >= o && !ball.out) {
    // debugger
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
        // dd = _rformat(_a);
      }
    }
    //  门判断
    if (dd > 300) {
      // debugger
      let lin = wall.lin;

      let _xx = Math.abs(lin.w_x - ball.x);
      let _yy = Math.abs(lin.w_y - ball.y);

      let _dd = Math.sqrt(_xx * _xx + _yy * _yy);

      if (_dd < ball.r) {
        // debugger
        ball.cout();
        return true;
      } else {
        return false;
      }
    }
    return true;
  }

  return false;
};
// 触发碰撞
let _collision = () => {
  // 改变角度
  if (angle < 180) {
    angle = 180 + angle;
    // console.log(angle);
    rad = _format(angle);
  } else {
    angle = angle - 180;
    // console.log(angle);
    rad = _format(angle);
  }
};

export default check;

let s = true;
// 格式化角度到弧度
let _format = angle => {
  return ((2 * Math.PI) / 360) * angle;
};
// 格式化弧度到角度
let _rformat = radian => {
  // return ((2 * Math.PI) / 360) * angle;
  return radian / ((2 * Math.PI) / 360);
};

let angle = 70;

let rad = _format(angle);

let check = (walls, ball) => {
  // if (s) {
  //   rad = _format(200);
  // }
  // console.log(rad)
  let speed = 1;

  // 加权
  let weighed = 1;
  // let _ball = ball.getAxis(rad);
  // let _wall;
  let wall;

  walls.map(item => {
    wall = item;
    // _wall = item.getAxis(rad);
  });

  ball.changeSpeed(speed);

  let flag = _detect(ball, wall, weighed);

  if (flag) {
    _collision();
    ball.run(rad);
  } else {
    ball.run(rad);
  }
  // if (flag) {
  //   rad = _format(180) + rad;
  //   // console.log(rad)
  //   if (rad > _format(360)) {
  //     rad = rad - _format(360);
  //   }
  //   // console.log(rad);
  //   s = false;
  //   ball.changeSpeed(1);
  //   ball.run(rad);
  // } else {
  //   ball.run(rad);
  // }
};
// 判断
let _detect = (ball, wall, w) => {
  // 5 壁宽
  let _x = Math.abs(wall.x - ball.x) + 5;
  let _y = Math.abs(wall.y - ball.y) + 5;

  let d = Math.sqrt(_x * _x + _y * _y);
  let o = Math.abs(ball.r - wall.r);

  if (d >= o) {
    // debugger
    let rr = Math.abs(wall.y - ball.y);
    let ang = rr / d;
    let _a = Math.asin(ang);

    // console.log(_a)
    // console.log(_rformat(_a))
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
        dd = 180 - _rformat(_a);
      } else {
        dd = _rformat(_a);
      }
    }

    // 门判断
    if (dd > 300) {
      return false;
    }
    // if(dd >= 300 && dd <= 360) {
    //   return false;
    // }else {
    return true;
    // }
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

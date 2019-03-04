let s = true

let rad 


let check = (walls, ball) => {

  if(s) {
    rad = _format(130);
  }
  // console.log(rad)
  let speed = 1;
  // 加权
  let weighed = 1;

  let _ball = ball.getAxis(rad);
  let _wall 
  let wall
  walls.map(item => {
    wall = item
     _wall = item.getAxis(rad);
  });

  ball.changeSpeed(speed);

  // console.log(_ball.b_x);
  // console.log(_wall.w_x);

  let flag = _detect(ball,wall,weighed);

  if (flag) {
    rad = _format(180) + rad;
    // console.log(rad)
    if(rad > _format(360)) {
      rad= rad - _format(360)
    }
    console.log(rad)
    s = false
    ball.changeSpeed(1);
    ball.run(rad);
  } else {
    ball.run(rad);
  }
};

// 判断
let _detect = (ball,wall,w) => {

  // 5 壁宽
  let _x = Math.abs(wall.x - ball.x)+5
  let _y = Math.abs(wall.y - ball.y)+5

  let d = Math.sqrt(_x*_x + _y*_y )
  let o = Math.abs(ball.r - wall.r)
  // console.log(rad)
  // && rad <= 5.235987755982989 && rad <= 6.283185307179586
   if(d >= o ) {
    return true
   }
    return false
}

// 格式化角度
let _format = angle => {
  return ((2 * Math.PI) / 360) * angle;
};
export default check;

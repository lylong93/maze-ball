import check from "./check";
let draw = (canvas, walls, ball) => {

  check(walls, ball);

  let ctx = canvas.getContext("2d");


  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  walls.map(item => {
    // console.log(item)
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(item.x, item.y, item.r, item.sAngle, item.eAngle, false);
    ctx.stroke();

    let o = (2*(Math.PI) / 360) * 290;

    let ww = item.getAxis(o);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(ww.w_x, ww.w_y, 5, 0, 2* Math.PI, false);
    // ctx.fill();
  });

 
  let grd = ctx.createRadialGradient(ball.Gx, ball.Gy, 1, ball.Gx, ball.Gy, 40);
  grd.addColorStop(0, ball.colors.s);
  grd.addColorStop(1, ball.colors.e);

  ctx.fillStyle = grd;

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, ball.sAngle, ball.eAngle, false);
  ctx.fill();
};

export default draw;

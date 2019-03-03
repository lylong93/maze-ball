import Ball from "./ball";
import Wall from "./wall";

// console.log(wall);

function draw(walls, ball) {
  let canvas = document.querySelector("#world");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let b = ball.get(((2 * Math.PI) / 360) * 30);
    let o;

    walls.map(item => {
      // console.log(item)
      ctx.beginPath();
      ctx.lineWidth = 10;
      ctx.arc(item.x, item.y, item.r, item.sAngle, item.eAngle, true);
      ctx.stroke();
      o = item.getx(((2 * Math.PI) / 360) * 30);
      console.log(o);

      // ctx.beginPath();
      // ctx.moveTo(item.x,item.y);
      // ctx.lineTo(o._x,o._y);
      // ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = "#FF0000";
      ctx.arc(o._x, o._y, 1, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fill();
    });

    if (b.b_x.toFixed(0) == o._x.toFixed(0)) {
      console.log(b.b_x.toFixed(0));
      console.log(b.b_y.toFixed(0));
    } else {
      ball.run(((2 * Math.PI) / 360) * 30);
    }
    // ctx.beginPath();
    // ctx.lineWidth=10;
    // ctx.arc(wall.x,wall.y,wall.r,wall.sAngle,wall.eAngle,true);
    // ctx.stroke();

    var grd = ctx.createRadialGradient(
      ball.Gx,
      ball.Gy,
      1,
      ball.Gx,
      ball.Gy,
      40
    );
    grd.addColorStop(0, "#fff");
    grd.addColorStop(1, "rgb(191,173,111)");
    ctx.fillStyle = grd;

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, ball.sAngle, ball.eAngle, true);

    ctx.fill();
  }
}

export default draw;
